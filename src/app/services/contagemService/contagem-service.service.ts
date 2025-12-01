import { Injectable } from '@angular/core';
import { DataBaseService } from '../dataBase/data-base.service';
import { BehaviorSubject } from 'rxjs';
import { ConexaoServiceService } from '../conexaoService/conexao-service.service';

@Injectable({
  providedIn: 'root'
})
export class ContagemServiceService {

  private contagensSubject = new BehaviorSubject<any>([]);

  contagens$ = this.contagensSubject.asObservable(); // a tela observa isso

  constructor(
    private conexaoService: ConexaoServiceService
  ) { }

  async adicionaContagem(objetoContagem: any) {
    const atual = this.contagensSubject.value;
    this.contagensSubject.next([...atual, objetoContagem]);
    console.log('adicionado a contagem ', objetoContagem)
  }

  async buscaConferencia() {
    await this.conexaoService.getConferencias().subscribe(retorno => {
      console.log('aqui o retorno ', retorno)
      // this.arrayItemsCompletos = retorno
      // this.itensSubject.next(retorno);
      // console.log('sdasdasd', this.itens$)
    })
  }
}
