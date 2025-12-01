import { Component, OnInit } from '@angular/core';
import { SharedIonicModule } from '../../services/SharedIonicModule/shared-ionic-module.service';
import { StorageService } from 'src/app/services/storage.service';
import { async } from 'rxjs';
import { DataBaseService } from 'src/app/services/dataBase/data-base.service';
import { ProdutoServiceService } from 'src/app/services/produtoService/produto-service.service';
import { ModalControllerService } from 'src/app/services/modalController/modal-controller.service';

@Component({
  selector: 'app-modal-cadastra-produto',
  templateUrl: './modal-cadastra-produto.page.html',
  styleUrls: ['./modal-cadastra-produto.page.scss'],
  standalone: true,
  imports: [SharedIonicModule],
})
export class ModalCadastraProdutoPage implements OnInit {

  constructor(
    private storageService:StorageService,
    private produtoService: ProdutoServiceService,
    private modalController: ModalControllerService
  ) { }

  ngOnInit() {
  }

  nomeProduto: string = '';

  async salvarProduto() {
    await this.produtoService.adicionarProduto({nome:this.nomeProduto,id:44,quantidade_contagem:0})
  };

  async modalSalvarProduto(){
    let objProd = {nome :this.nomeProduto} 
    this.produtoService.adicionarProduto(objProd).catch(teste => {
      console.log('teste')
    })
  }

  async closeModal(): Promise<void> {
    await this.modalController.closeModal();
  }
}
