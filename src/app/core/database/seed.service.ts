import { Injectable } from '@angular/core';
import { DataBaseService } from './database.service';

@Injectable({ providedIn: 'root' })
export class SeedService {

  constructor(private db: DataBaseService) {}

  async seed() {
    const produtos = await this.db.query('SELECT COUNT(*) as total FROM produtos');
    if (produtos[0].total > 0) return;

    await this.db.run(`
      INSERT INTO produtos (nome, unidade) VALUES
      ('Coca Cola 2 litros', '2L'),
      ('Água com gás', '500ml'),
      ('Água sem gás', '500ml'),
      ('Brahma 600', '600ml')
    `);

    await this.db.run(`
      INSERT INTO freezers (nome) VALUES
      ('Ambev refri'),
      ('Ambev cerveja 600'),
      ('Ambev latão'),
      ('Nelsão refri'),
      ('Nelsão copos')
    `);
  }
}
