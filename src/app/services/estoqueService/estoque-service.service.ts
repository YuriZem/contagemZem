import { Injectable } from '@angular/core';
import { DataBaseService } from '../dataBase/data-base.service';

@Injectable({
  providedIn: 'root'
})
export class EstoqueServiceService {
  nameEstoque: string = '';

  constructor(private dataBaseService: DataBaseService) { }


   async adicionarEstoque(name: string): Promise<void> {
    await this.dataBaseService.verificaConexao()
    const insertQuery = `INSERT INTO ESTOQUE (name) VALUES (?)`;
    const values = [name]; // visible como 1 (true) e qtd_total como 1
    try {

      await this.dataBaseService.querySQL(insertQuery, values);
    } catch (error) {
      console.error('Erro ao adicionar Estoque:', error);
    }
  }

  async getInventory(): Promise<any[]> {
    await this.dataBaseService.verificaConexao()

    const selectQuery = `SELECT * FROM ESTOQUE`;
    try {
      const result = await this.dataBaseService.querySQL(selectQuery) || { rows: [] };
      return result; // Retorna os estoques obtidos
    } catch (error) {
      console.error('Erro ao obter estoques:', error);
      return [];
    }
  }
}
