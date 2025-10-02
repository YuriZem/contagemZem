import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { ModalControllerService } from '../services/modalController/modal-controller.service';
// import { Storage } from '@ionic/storage-angular';
import { SharedIonicModule } from '../services/SharedIonicModule/shared-ionic-module.service';
import { DataBaseService } from '../services/dataBase/data-base.service';
import { SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { ESLint } from 'eslint';
import { ProdutoServiceService } from '../services/produtoService/produto-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [SharedIonicModule,],
  providers: []
})
export class HomePage {
 

// items = [
//   { id:'1', name: 'Item 1', visible: true, qtd_total: 1 },
// ];

  items : any = [];
  filtro: string = '';

// items : [{id:string}] = [{id:'0'}];
  constructor(
    private storageService: StorageService,
    private modalControllerService: ModalControllerService,
    private dataBaseService: DataBaseService,
    private produtoService: ProdutoServiceService
  ) {}

  ionViewWillEnter(){
    
    // this.atualizaLista()
  }

  async ngOnInit() {
    await this.dataBaseService.initializeDatabase();
    await this.atualizaLista();

    // await this.dataBaseService.dropTables();
    // await this.dataBaseService.querySQL('drop table if exists CONTAGEM');
    // await this.dataBaseService.querySQL('drop table if exists PRODUTO');
    // await this.dataBaseService.querySQL('drop table if exists ESTOQUE');

    // await this.dataBaseService.querySQL('insert into ESTOQUE (name) values (?)', ['ESTOQUE A']);
    // await this.dataBaseService.querySQL('insert into CONTAGEM (id_prod, id_estoque,quantidade,state) values (?,?,?,?)', ['1','1','10',true]);
    
    // const produtos = await this.dataBaseService.querySQL('SELECT * FROM PRODUTO');

 
    // const estoque = await this.dataBaseService.querySQL('SELECT * FROM ESTOQUE');
    // const contagem = await this.dataBaseService.querySQL('SELECT * FROM CONTAGEM');

    // const contagem2 = await this.dataBaseService.querySQL(
    //   `SELECT 
    //      C.id, 
    //      C.quantidade, 
    //      C.state, 
    //      P.name AS produto, 
    //      E.name AS estoque
    //    FROM CONTAGEM C
    //    JOIN PRODUTO P ON C.id_prod = P.id
    //    JOIN ESTOQUE E ON C.id_estoque = E.id`
    // );
    
    // console.log(this.items)
    // console.log('estoque:', estoque);
    // console.log('contagem:', contagem);
    // console.log('contagem2:', contagem2);
  }
  
  adicionaItem(){
    console.log('aqui o item')
    this.modalControllerService.modalCadastraProduto().then((data) => {
      this.atualizaLista();
    })
  }

  openModalInvetory(){
    console.log('aqui o item')
    this.modalControllerService.modalInvetory().then((data) => {
      // this.atualizaLista();
    })
  }
  
  async atualizaLista(){
    await this.produtoService.obterProdutos().then((data) => {
      console.log('Produtos via service:', data);
      this.items = data;
    }).catch((error) => {
      console.error('Erro ao obter produtos via service:', error);
    });
  }

  dropTables(){
    this.dataBaseService.dropTables();
  }

  aplicaFiltro(){
    this.produtoService.pesquisaProduto(this.filtro).then((data) => {
      console.log('Produtos via service:', data);
      this.items = data;
    }).catch((error) => {
      console.error('Erro ao obter produtos via service:', error);
    });
  }
}
