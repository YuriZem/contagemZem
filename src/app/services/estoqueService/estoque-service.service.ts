import { Injectable } from '@angular/core';
import { DataBaseService } from '../dataBase/data-base.service';
import { BehaviorSubject } from 'rxjs';
import { ConexaoServiceService } from '../conexaoService/conexao-service.service';

@Injectable({
  providedIn: 'root'
})
export class EstoqueServiceService {
  nameEstoque: string = '';
  private itensSubject = new BehaviorSubject<any>([]);

  itens$ = this.itensSubject.asObservable(); // a tela observa isso

  constructor(private conexaoService: ConexaoServiceService) { 
    // this.adicionarEstoque({nome:'fre 2', id : 3})
  }

  async adicionarEstoque(novoItem: any) {
    this.conexaoService.postEstoque(novoItem).subscribe(retorno => {
      this.buscaEstoque()
    })
  }

  async buscaEstoque() {
    await this.conexaoService.getEstoque().subscribe(retorno => {
      this.itensSubject.next(retorno);
    })
  }

}
