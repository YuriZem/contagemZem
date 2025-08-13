import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {

  constructor( private storageService: StorageService ) { }

  // async pesquisarProduto(query: string): Promise<any[]> {
  //   // Simulação de pesquisa em uma lista de itens
    
  //   // const items = await this.storageService.get('PRODUTOS') || [];
  //   if (!query) {
  //     // return items; // Retorna todos os itens se a consulta estiver vazia
  //   } 

  //   // Filtra os itens com base na consulta
  //   // return items.filter((item: { name: string; }) => item.name.toLowerCase().includes(query.toLowerCase())); 
  //   // Se você quiser usar uma propriedade diferente, ajuste conforme necessário
  //   // Exemplo: se os itens tiverem uma propriedade 'name', você pode usar:
  //   // return items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
  //   // Se os itens tiverem uma propriedade diferente, ajuste conforme necessário  
  //   // return items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
  // }
}
