import { Component, OnInit } from '@angular/core';
import { ContagemServiceService } from '../services/contagemService/contagem-service.service';
import { SharedIonicModule } from '../services/SharedIonicModule/shared-ionic-module.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-contagens',
  templateUrl: './lista-contagens.page.html',
  styleUrls: ['./lista-contagens.page.scss'],
  standalone: true,
  imports: [SharedIonicModule,],

})
export class ListaContagensPage implements OnInit {

  contagens$: any = this.contagemService.contagens$

    conferencias = [
    {
      id: 1,
      estoqueNome: 'Freeezer Coca ',
      dataInicio: '2025-12-01T10:00:00',
      status: 'em_andamento'
    },
    {
      id: 2,
      estoqueNome: 'Freezer ambev',
      dataInicio: '2025-12-01T08:30:00',
      status: 'finalizada'
    },
    {
      id: 3,
      estoqueNome: 'Freezer ambev Cerveja',
      dataInicio: '2025-12-01T08:30:00',
      status: 'finalizada'
    },
    {
      id: 3,
      estoqueNome: 'Freezer ambev latao',
      dataInicio: '2025-12-01T08:30:00',
      status: 'finalizada'
    }
  ];

  constructor(private contagemService: ContagemServiceService, private router: Router) {
    console.log('aqui as contagens feitas ', this.contagens$)
  }

  ngOnInit() {
  }
  
  ionViewWillEnter(){
    this.contagemService.buscaConferencia().then(retorno => console.log('aqui on final ',retorno ))

  }

  abrirConferencia(conf: any) {
    console.log('Abrir conferência', conf);
  }

  novaConferencia() {
    console.log('Criar nova conferência');
  }

  voltar(){
         this.router.navigate(['/home'])
  }
}



