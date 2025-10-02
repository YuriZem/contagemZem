import { Component, Input, OnInit } from '@angular/core';
import { ModalControllerService } from 'src/app/services/modalController/modal-controller.service';
import { SharedIonicModule } from 'src/app/services/SharedIonicModule/shared-ionic-module.service';

@Component({
  selector: 'app-modal-contagem',
  templateUrl: './modal-contagem.page.html',
  styleUrls: ['./modal-contagem.page.scss'],
  standalone: true,
  imports: [SharedIonicModule]
})
export class ModalContagemPage implements OnInit {
  @Input() item: any = {};

  nome = 'Produto Exemplo';
  estoque = 'Seleciona o estoque';
  valorDigitado = '';

  constructor(
    private modalControllerService: ModalControllerService,
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.nome = this.item.name;
  }

  addNumero(num: string) {
    this.valorDigitado += num;
  }

  limpar() {
    this.valorDigitado = '';
  }

  backspace() {
    this.valorDigitado = this.valorDigitado.slice(0, -1);
  }

  confirmar() {
    // Lógica para confirmar a ação
    console.log('Confirmado:', this.valorDigitado);
  }

  cancelar() {
    // Lógica para cancelar/fechar o modal
    console.log('Cancelado');
  }

  async openEstoqueSelection() {
    // Lógica para abrir a seleção de estoque
    console.log('Abrir seleção de estoque');

    await this.modalControllerService.modalInvetory().then((retorno) => {
      console.log('Modal de seleção de estoque fechado');
      console.log('Dados retornados:', retorno);
    });
  }
}
