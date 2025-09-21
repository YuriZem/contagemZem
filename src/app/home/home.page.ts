import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { ModalControllerService } from '../services/modalController/modal-controller.service';
// import { Storage } from '@ionic/storage-angular';
import { SharedIonicModule } from '../services/SharedIonicModule/shared-ionic-module.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [SharedIonicModule],
  providers: [
  ]
})
export class HomePage {
items = [
  { id:'1', name: 'Item 1', visible: true, qtd: 1 },
];

// items : [{id:string}] = [{id:'0'}];
  constructor(
    private storageService: StorageService,
    private modalControllerService: ModalControllerService
  ) {}

  async ngOnInit() {
    console.log('iniciou')
    await this.storageService.init();
    this.atualizaLista()
    const valor = await this.storageService.get('PRODUTOS');
    console.log(valor);
  }
  
  adicionaItem(){
    console.log('aqui o item')
    this.modalControllerService.modalCadastraProduto().then((data) => {})
  }
  atualizaLista(){
    this.storageService.get('PRODUTOS').then((produtos) => { 
      this.items = produtos;
      console.log('veio aqio ',this.items)  
      })
  }
}
