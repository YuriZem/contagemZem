import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { SharedIonicModule } from 'src/app/services/SharedIonicModule/shared-ionic-module.service';
import { ModalControllerService } from 'src/app/services/modalController/modal-controller.service';
import { EstoqueServiceService } from 'src/app/services/estoqueService/estoque-service.service';

@Component({
  selector: 'app-modal-inventory',
  templateUrl: './modal-inventory.page.html',
  styleUrls: ['./modal-inventory.page.scss'],
  standalone: true,
  imports: [SharedIonicModule]  
  
})
export class ModalInventoryPage implements OnInit {
  nameInventory: string = '';
  items : any = [];
  new : boolean = false;

  constructor(
    private modalController: ModalControllerService,
    private estoqueService: EstoqueServiceService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    console.log('ionViewWillEnter');
    this.getInventory()
  }

  async saveInventory() {
    this.estoqueService.adicionarEstoque(this.nameInventory).then(() => {
      // Aqui você pode adicionar um alerta ou notificação de sucesso
      console.log('inventory saved successfully!');
      this.closeModal();
    }).catch((error) => {
      // Aqui você pode adicionar um alerta ou notificação de erro
      console.error('Error saving inventory:', error);
    });
  }

  async closeModal(): Promise<void> {
    await this.modalController.closeModal();
  }

  newINventory(){
    this.new = true;
  }
  
  cancelNewInventory(){
    this.new = false; 
    this.nameInventory = '';
  }
  async getInventory(){
    await this.estoqueService.getInventory().then((data) => {
      this.items = data;
      console.log('Estoques via service:', data);
    }).catch((error) => {
      console.error('Erro ao obter estoques via service:', error);
    });
  }

}
