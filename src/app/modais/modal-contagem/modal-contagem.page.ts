import { Component, Input, OnInit } from '@angular/core';
import { ContagemServiceService } from 'src/app/services/contagemService/contagem-service.service';
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
    private contagemService: ContagemServiceService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.nome = this.produtoSelecionado.nome;
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

  async confirmar() {
    // Lógica para confirmar a ação
    console.log('Confirmado:', this.valorDigitado);
    console.log('Estoque selecionado:', this.estoqueSelecionado);
    // Aqui você pode adicionar a lógica para salvar a contagem no banco de dados ou serviço

    let objetoContagem = {
      id_prod: this.produtoSelecionado.id,
      id_estoque: this.estoqueSelecionado.id,
      quantidade: this.valorDigitado,
      state: true
    };
    console.log('Objeto contagem a ser salvo:', objetoContagem);
    await this.contagemService.adicionaContagem(objetoContagem);

    this.modalControllerService.closeModal('confirmado');
  }

  cancelar() {
    // Lógica para cancelar/fechar o modal
    console.log('Cancelado');
  }

  async openEstoqueSelection() {
    await this.modalControllerService.modalEstoque().then((retorno) => {
      this.estoque = retorno.nome;
      this.estoqueSelecionado = retorno;
      console.log('Estoque selecionado:', this.estoqueSelecionado);
    });
  }
}
