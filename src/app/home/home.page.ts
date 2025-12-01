import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { ModalControllerService } from '../services/modalController/modal-controller.service';
// import { Storage } from '@ionic/storage-angular';
import { SharedIonicModule } from '../services/SharedIonicModule/shared-ionic-module.service';
import { DataBaseService } from '../services/dataBase/data-base.service';
import { ProdutoServiceService } from '../services/produtoService/produto-service.service';
import { Router } from '@angular/router';
import { ConexaoServiceService } from '../services/conexaoService/conexao-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone:true,
  imports: [SharedIonicModule],
  providers: []
})
export class HomePage {

  itens :any = this.produtoService.itens$
  filtro: string = '';

  constructor(
    private storageService: StorageService,
    private modalControllerService: ModalControllerService,
    private dataBaseService: DataBaseService,
    private produtoService: ProdutoServiceService,
    private router: Router,
    private conexaoService: ConexaoServiceService
  ) {}

  
  ionViewWillEnter(){
    this.produtoService.buscaProduto().then(retorno => console.log('aqui on final ',retorno ))
  }

  async ngOnInit() {

  }
  
  teste(){
    // this.conexaoService.getDados().subscribe(retorno => console.log(retorno))
    this.produtoService.buscaProduto().then(retorno => console.log('aqui on final ',retorno ))
  }

  adicionaItem(){
    console.log('aqui o item')
    this.modalControllerService.modalCadastraProduto().then((data) => {
      // this.atualizaLista();
    })
  }

  modalEstoque(){
    console.log('aqui o item')
    this.modalControllerService.modalEstoque().then((data) => {
      // this.atualizaLista();
    })
  }
  aplicaFiltro(){
    this.produtoService.pesquisaProduto(this.filtro).then((data) => {
    //   console.log('Produtos via service:', data);
      // this.items = data;
    }).catch((error) => {
      // console.error('Erro ao obter produtos via service:', error);
    });
  }

  limpar(){
    this.filtro = ''
    this.produtoService.pesquisaProduto('').then((data) => {
    //   console.log('Produtos via service:', data);
      // this.items = data;
    }).catch((error) => {
      // console.error('Erro ao obter produtos via service:', error);
    });
  }

   openModalContagem(item?: any){
    console.log('aqui o item')
    this.modalControllerService.modalContagem(item).then((data) => {

    })
  }
  async selecionaItem(item: any){
    await this.openModalContagem(item);
  }

  async buscaProdutos(){
    this.itens = await this.produtoService.retornaItens()
    console.log('aqui itens',this.itens)
  }

  abreListaContagens(){
     this.router.navigate(['/lista-contagens'])
  }
}
