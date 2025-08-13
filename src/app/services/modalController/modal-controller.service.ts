import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ModalCadastraProdutoPage } from 'src/app/modais/modal-cadastra-produto/modal-cadastra-produto.page';
@Injectable({
  providedIn: 'root'
})
export class ModalControllerService {

  constructor( private modalController: ModalController,) { }
  infoSelecionada: any;

  async modalFormaPagamento(): Promise<any> {
    let info;
    const modal = await this.modalController.create({ component: ModalCadastraProdutoPage, cssClass: 'modal-cadastra-produto' });
    await modal.present();
    return modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != null) {
        info = dataReturned.data;
      } else {
        info = { GRPEST01_COD: '', GRPEST01_GRP: 'Selecione o grupo' };
      }
      this.infoSelecionada = null;
      this.infoSelecionada = info;
    });
  }
}
