import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
   private sqlite: SQLiteConnection;
   private db: SQLiteDBConnection | null = null;

   constructor(db: SQLiteDBConnection) {
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
              CREATE TABLE IF NOT EXISTS PROD (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL
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
}
