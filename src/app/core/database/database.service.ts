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
      const retCC = (await this.sqlite.checkConnectionsConsistency()).result;
      const isConnection = (await this.sqlite.isConnection('estoqueDB', false)).result;

      if (!isConnection && !retCC) {

        // ⚠️ mantenho o MESMO formato da sua conexão anterior
        this.db = await this.sqlite.createConnection('estoqueDB', false, 'no-encryption', 1, false);
        await this.db.open();

        // ✅ Tabelas do sistema novo
        await this.db.execute(`
          CREATE TABLE IF NOT EXISTS produtos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            unidade TEXT
          );
        `);

        await this.db.execute(`
          CREATE TABLE IF NOT EXISTS freezers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL
          );
        `);

        await this.db.execute(`
          CREATE TABLE IF NOT EXISTS estoques (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            data TEXT NOT NULL,
            tipo TEXT NOT NULL, 
            produto_id INTEGER NOT NULL,
            freezer_id INTEGER NOT NULL,
            quantidade INTEGER NOT NULL,
            FOREIGN KEY(produto_id) REFERENCES produtos(id),
            FOREIGN KEY(freezer_id) REFERENCES freezers(id)
          );
        `);

        await this.db.execute(`
          CREATE TABLE IF NOT EXISTS vendas_sistema (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            data TEXT NOT NULL,
            produto_id INTEGER NOT NULL,
            quantidade INTEGER NOT NULL,
            origem TEXT,
            FOREIGN KEY(produto_id) REFERENCES produtos(id)
          );
        `);

      } else if (isConnection && retCC) {
        this.db = await this.sqlite.retrieveConnection('estoqueDB', false);
      }
    } catch (error) {
      console.error('Erro ao inicializar DB:', error);
    }
  }

  // ---- métodos utilitários ----

  async run(query: string, values?: any[]): Promise<any> {
    if (!this.db) throw new Error('DB não inicializado.');
    return this.db.run(query, values);
  }

  async query(query: string, values?: any[]): Promise<any[]> {
    if (!this.db) throw new Error('DB não inicializado.');
    const result = await this.db.query(query, values);
    return result.values ?? [];
  }

  async verificarConexao() {
    try {
      const retCC = (await this.sqlite.checkConnectionsConsistency()).result;
      const isConnection = (await this.sqlite.isConnection('estoqueDB', false)).result;

      if (!isConnection && !retCC) {
        this.db = await this.sqlite.createConnection('estoqueDB', false, 'no-encryption', 1, false);
        await this.db.open();
      } else if (isConnection && retCC) {
        this.db = await this.sqlite.retrieveConnection('estoqueDB', false);
      }
    } catch (error) {
      console.error('Erro ao verificar conexão:', error);
    }
  }

  async dropTables(): Promise<void> {
    if (!this.db) throw new Error('DB não inicializado.');
    await this.db.execute('DROP TABLE IF EXISTS vendas_sistema');
    await this.db.execute('DROP TABLE IF EXISTS estoques');
    await this.db.execute('DROP TABLE IF EXISTS freezers');
    await this.db.execute('DROP TABLE IF EXISTS produtos');
  }
}
