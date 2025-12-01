import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { SharedIonicModule } from 'src/app/services/SharedIonicModule/shared-ionic-module.service';
import { ModalControllerService } from 'src/app/services/modalController/modal-controller.service';
import { EstoqueServiceService } from 'src/app/services/estoqueService/estoque-service.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-modal-inventory',
  templateUrl: './modal-inventory.page.html',
  styleUrls: ['./modal-inventory.page.scss'],
  standalone: true,
  imports: [SharedIonicModule]

})
export class ModalInventoryPage implements OnInit {
  nomeEstoque: string = '';
  itens$ = this.estoqueService.itens$;
  novo: boolean = false;


  constructor(
    private modalController: ModalControllerService,
    private estoqueService: EstoqueServiceService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.estoqueService.buscaEstoque().then(ret => console.log(ret))
  }

  async closeModal(): Promise<void> {
    await this.modalController.closeModal('');
  }

  abreCadastroEstoque() {
    this.novo = true;
  }

  cancelNewInventory() {
    // this.new = false; 
    // this.nameInventory = '';
  }

  selecionaInventory(item: any) {
    console.log('Item selecionado:', item);
    this.modalController.closeModal(item);
  }

  novoEstoque() {
    this.estoqueService.adicionarEstoque({ nome: this.nomeEstoque, id: 3 })
  }

}
