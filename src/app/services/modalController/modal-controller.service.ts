import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ModalCadastraProdutoPage } from 'src/app/modais/modal-cadastra-produto/modal-cadastra-produto.page';
import { ModalInventoryPage } from 'src/app/modais/modal-inventory/modal-inventory.page';
import { ModalContagemPage } from 'src/app/modais/modal-contagem/modal-contagem.page';
import { EstoqueServiceService } from '../estoqueService/estoque-service.service';
@Injectable({
  providedIn: 'root'
})
export class ModalControllerService {

  constructor(private modalController: ModalController, private estoqueService: EstoqueServiceService) { }
  infoSelecionada: any;

  async modalCadastraProduto(): Promise<any> {
    let info;
    const modal = await this.modalController.create({ component: ModalCadastraProdutoPage, cssClass: 'modal-cadastra-produto' });
    await modal.present();
    return modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != null) {
        info = dataReturned.data;
      } else {
        info = ''
      }
      this.infoSelecionada = null;
      this.infoSelecionada = info;
    });
  }

  async modalEstoque(): Promise<any> {
    const modal = await this.modalController.create({ component: ModalInventoryPage, cssClass: 'modal-cadastra-produto' });
    await modal.present();
    return modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != null) {
        return dataReturned.data;
      } else {
        return null;
      }
    });
  }

  async modalContagem(item: any): Promise<any> {
    let info;
    const modal = await this.modalController.create({
      component: ModalContagemPage,
      cssClass: 'modal-cadastra-produto'
      , componentProps: { produtoSelecionado: item }
    });
    await modal.present();
    return modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != null) {
        info = dataReturned.data;
      } else {
        info = '';
      }
      this.infoSelecionada = null;
      this.infoSelecionada = info;
    });
  }

  closeModal(item?: any): Promise<any> {
    return this.modalController.dismiss(item);
  }
}
