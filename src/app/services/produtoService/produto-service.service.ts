import { Injectable } from '@angular/core';
import { DataBaseService } from '../dataBase/data-base.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConexaoServiceService } from '../conexaoService/conexao-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {

  private itensSubject = new BehaviorSubject<any>([]);

  itens$ = this.itensSubject.asObservable(); // a tela observa isso

  //estou usando uma variavel para guardar o array total para poder fazer a pesquisa por que se eu pesquisar a segunda vez fica
  //com base no retorno do primeiro filtro 
  //devo colocar para salvar localhost caso os array fiquem grandes
  arrayItemsCompletos: any = []; // preciso tipar 

  constructor(
    private dataBaseService: DataBaseService,
    private conexaoService: ConexaoServiceService
  ) {}

  retornaItens() {
    return this.itensSubject.value
  }

  async buscaProduto() {
    await this.conexaoService.getProdutos().subscribe(retorno => {
      console.log('aqui o retorno ', retorno )
      this.arrayItemsCompletos = retorno
      this.itensSubject.next(retorno);
      console.log('sdasdasd', this.itens$)
    })
  }

  async pesquisaProduto(pesquisa = '') {
    //melhorar a pesquisa e talvez colocar em storage
    const filtrados = this.arrayItemsCompletos.filter((i:any) =>
      i.nome.toLowerCase().includes(pesquisa.toLowerCase())
    );

    this.itensSubject.next(filtrados);
  }

  async adicionarProduto(novoItem: any) {
    await this.conexaoService.postProduto(novoItem).subscribe(retorno => {
      this.buscaProduto()
    })
  }
}
