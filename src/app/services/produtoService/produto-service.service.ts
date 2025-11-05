import { Injectable } from '@angular/core';
import { DataBaseService } from '../dataBase/data-base.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {

  constructor(private dataBaseService: DataBaseService) {
    
   }


  async adicionarProduto(nome: string): Promise<void> {
    await this.dataBaseService.verificaConexao()
    const insertQuery = `INSERT INTO PRODUTO (name, qtd_total) VALUES (?, ?)`;
    const values = [nome, 0]; // visible como 1 (true) e qtd_total como 1
    try {

      await this.dataBaseService.querySQL(insertQuery, values);
      // console.log('Produto adicionado com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
    }
  }

  async obterProdutos(): Promise<any[]> {
    await this.dataBaseService.verificaConexao()

    // const selectQuery = `SELECT * FROM PRODUTO`;
    const selectQuery = `SELECT P.id,P.name,P.qtd_total,IFNULL(SUM(C.quantidade), 0) AS quantidade_contada FROM PRODUTO P LEFT JOIN CONTAGEM C ON C.id_prod = P.id GROUP BY P.id, P.name, P.qtd_total`

    try {
      const result = await this.dataBaseService.querySQL(selectQuery) || { rows: [] };
      return result; // Retorna os produtos obtidos
    } catch (error) {
      console.error('Erro ao obter produtos:', error);
      return [];
    }
  }
  async pesquisaProduto(pesquisa=''): Promise<any[]> {
    await this.dataBaseService.verificaConexao()

      const selectQuery = `SELECT * FROM PRODUTO WHERE name LIKE ?`;
      const values = [`%${pesquisa}%`];
    try {
      const result = await this.dataBaseService.querySQL(selectQuery, values) || { rows: [] };
      return result; // Retorna os produtos obtidos
    } catch (error) {
      console.error('Erro ao obter produtos:', error);
      return [];
    }
  }
}
