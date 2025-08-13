import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {IonLabel,IonButton, IonHeader, IonToolbar, IonTitle, IonContent,IonItem, IonList,IonCol,IonRow,IonGrid} from '@ionic/angular/standalone';
import { StorageService } from '../services/storage.service';
import { ModalControllerService } from '../services/modalController/modal-controller.service';
// import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonLabel, IonButton,IonHeader, IonToolbar, IonTitle, IonContent,IonItem, IonList,IonCol,IonRow,IonGrid,CommonModule],
  providers: [
  ]
})
export class HomePage {
items = [
  { name: 'Item 1', visible: true, qtd: 1 },
  { name: 'Item 2', visible: false, qtd: 2 },
  { name: 'Item 3', visible: true, qtd: 2 },
  { name: 'Item 4', visible: true, qtd: 2 },
  { name: 'Item 5', visible: true, qtd: 2 },
  { name: 'Item 6', visible: true, qtd: 2 },
];
  constructor(
    private storageService: StorageService,
    private modalControllerService: ModalControllerService
  ) {}

  async ngOnInit() {
    await this.storageService.init();
    await this.storageService.set('PRODUTOS',this.items);

    const valor = await this.storageService.get('PRODUTOS');
    console.log(valor);
  }
  acao(item: any) {
    // ação desejada, exemplo:
    console.log('Item selecionado:', item);
  }

  pesquisar(query: string) {
    // lógica de pesquisa, por exemplo:
    console.log('Pesquisa:', query);
  }
  adicionaItem(){
    console.log('aqui o item')
    this.modalControllerService.modalFormaPagamento().then((data) => {})
  }

  // adicionarItem() {
  //   const novoItem = { name: `Item ${this.items.length + 1}`, visible: true, qtd: 1 };
  //   this.items.push(novoItem);
  // }

  // removerItem(index: number) {
  //   this.items.splice(index, 1);
  // }

  // atualizarItem(index: number) {
  //   this.items[index].qtd += 1; // Exemplo de atualização

  //   //.

  // }

  // toggleVisibility(item: any) {
  //   item.visible = !item.visible;
  // }

  // // Exemplo de método para filtrar itens
  // filtrarItens() {
  //   return this.items.filter(item => item.visible);
  // }
  
}
