import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root',
})
export class DataBaseService {
   private sqlite: SQLiteConnection;
   private db: SQLiteDBConnection | null = null;

   constructor() {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
   }

     async initializeDatabase(): Promise<void> {
        try {
          // Check connection consistency and if already connected
          const retCC = (await this.sqlite.checkConnectionsConsistency()).result;
          const isConnection = (await this.sqlite.isConnection('appDB', false)).result;

          if (!isConnection && !retCC) {
            // Create a new connection
            this.db = await this.sqlite.createConnection('appDB', false, 'no-encryption', 1, false);
            await this.db.open();

            // Example: Create a table if it doesn't exist
            
            await this.db.execute(`
              CREATE TABLE IF NOT EXISTS PRODUTO (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                qtd_total INTEGER DEFAULT 0
              );
            `);

            await this.db.execute(`
              CREATE TABLE IF NOT EXISTS ESTOQUE (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL
              );
            `);

            await this.db.execute(`
              CREATE TABLE IF NOT EXISTS CONTAGEM (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_prod INTEGER,
                id_estoque INTEGER,
                quantidade INTEGER, 
                state BOOLEAN,
                FOREIGN KEY (id) REFERENCES PRODUTO(id),
                FOREIGN KEY (id) REFERENCES ESTOQUE(id)
              );
            `);
          } else if (isConnection && retCC) {
            // Get the existing connection
            this.db = await this.sqlite.retrieveConnection('appDB', false);
          }
        } catch (error) {
          console.error('Error initializing database:', error);
        }
      }

      async runSQL(query: string, values?: any[]): Promise<any> {
        if (!this.db) {
          throw new Error('Database not initialized.');
        }
        return this.db.run(query, values);
      }
   
      async querySQL(query: string, values?: any[]): Promise<any[]> {
        if (!this.db) {
          throw new Error('Database not initialized.');
        }
        const result = await this.db.query(query, values);
        return result.values || [];
      }



      async verificaConexao(){
        try {
          // Check connection consistency and if already connected
          const retCC = (await this.sqlite.checkConnectionsConsistency()).result;
          const isConnection = (await this.sqlite.isConnection('appDB', false)).result;

          if (!isConnection && !retCC) {
            // Create a new connection
            this.db = await this.sqlite.createConnection('appDB', false, 'no-encryption', 1, false);
            await this.db.open();
            console.log('Conexão criada e aberta com sucesso.');
          } else if (isConnection && retCC) {
            // Get the existing connection
            this.db = await this.sqlite.retrieveConnection('appDB', false);
            console.log('Conexão existente recuperada com sucesso.');
          } else {
            console.log('A conexão já está aberta e consistente.');
          }
        } catch (error) {
          console.error('Erro ao verificar a conexão com o banco de dados:', error);
        }
      }

      cleanDatabase(): Promise<void> {
        if (this.db) {
          return this.db.close();
        }
        return Promise.resolve();
      }

      async dropTables(): Promise<void> {
        if (!this.db) {
          throw new Error('Database not initialized.');
        }   
        await this.db.execute('DROP TABLE IF EXISTS CONTAGEM');
        await this.db.execute('DROP TABLE IF EXISTS PRODUTO');
        await this.db.execute('DROP TABLE IF EXISTS ESTOQUE');
      }
}
