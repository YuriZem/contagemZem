import { Component, OnInit } from '@angular/core';
import { SharedIonicModule } from '../../services/SharedIonicModule/shared-ionic-module.service';

@Component({
  selector: 'app-modal-cadastra-produto',
  templateUrl: './modal-cadastra-produto.page.html',
  styleUrls: ['./modal-cadastra-produto.page.scss'],
  standalone: true,
  imports: [SharedIonicModule],
})
export class ModalCadastraProdutoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nomeProduto: string = '';

salvarProduto() {
  // lógica para salvar o produto
  console.log('Produto cadastrado:', this.nomeProduto);
  // Feche o modal ou envie o dado para o componente pai
}
}
