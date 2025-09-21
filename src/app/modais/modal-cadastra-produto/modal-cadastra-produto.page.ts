import { Component, OnInit } from '@angular/core';
import { SharedIonicModule } from '../../services/SharedIonicModule/shared-ionic-module.service';
import { StorageService } from 'src/app/services/storage.service';
import { async } from 'rxjs';

@Component({
  selector: 'app-modal-cadastra-produto',
  templateUrl: './modal-cadastra-produto.page.html',
  styleUrls: ['./modal-cadastra-produto.page.scss'],
  standalone: true,
  imports: [SharedIonicModule],
})
export class ModalCadastraProdutoPage implements OnInit {

  constructor(private storageService:StorageService) { }

  ngOnInit() {
  }

  nomeProduto: string = '';

  async salvarProduto() {
    this.storageService.get('PRODUTOS').then(async (produtos) => { 
      if(produtos == null){
        produtos = [];
        const novoProduto = { id: (1).toString(), name: this.nomeProduto, visible: true, qtd: 1 };
        produtos.push(novoProduto);
        await this.storageService.set('PRODUTOS', produtos);

        //aqui alerta de item salvo
      }else{
        const novoProduto = { id: (produtos.length + 1).toString(), name: this.nomeProduto, visible: true, qtd: 1 };
        produtos.push(novoProduto);
        console.log(produtos)
        await this.storageService.set('PRODUTOS', produtos);
        //aqui alerta de item salvo

      }    
    })
  };

}
