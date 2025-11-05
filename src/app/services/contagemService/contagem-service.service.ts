import { Injectable } from '@angular/core';
import { DataBaseService } from '../dataBase/data-base.service';

@Injectable({
  providedIn: 'root'
})
export class ContagemServiceService {

  constructor(
    private dataBaseService: DataBaseService
  ) { }

  async adicionaContagem(objetoContagem: any): Promise<any[]> {
    console.log('Adicionando contagem:', objetoContagem);
    await this.dataBaseService.verificaConexao()
    
    const selectQuery = ' insert into CONTAGEM (id_prod, id_estoque,quantidade,state) values (?,?,?,?)';
    const values = [objetoContagem.id_prod, objetoContagem.id_estoque, objetoContagem.quantidade, objetoContagem.state];
    
    try {
      const result = await this.dataBaseService.querySQL(selectQuery, values) || { rows: [] };
      return result; // Retorna os produtos obtidos
    } catch (error) {
      console.error('Erro ao obter produtos:', error);
      return [];
    }
  }
}
