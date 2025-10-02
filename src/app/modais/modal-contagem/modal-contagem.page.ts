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
  @Input() produtoSelecionado: any = {};

  nome = 'Produto Exemplo';
  estoque = 'Seleciona o estoque';

  produto = this.produtoSelecionado.produto;
  estoqueSelecionado :any = {};
  valorDigitado = '';

  constructor(
    private modalControllerService: ModalControllerService,
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.nome = this.produtoSelecionado.name;
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
    await this.modalControllerService.modalInvetory().then((retorno) => {
      this.estoque = retorno.name;
      this.estoqueSelecionado = retorno;
      console.log('Estoque selecionado:', this.estoqueSelecionado);
    });
  }
}
