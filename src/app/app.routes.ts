import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  // {
  //   path: '',
  //   redirectTo: 'contagem-inicial',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'modal-cadastra-produto',
    loadComponent: () => import('./modais/modal-cadastra-produto/modal-cadastra-produto.page').then( m => m.ModalCadastraProdutoPage)
  },
  {
    path: 'modal-inventory',
    loadComponent: () => import('./modais/modal-inventory/modal-inventory.page').then( m => m.ModalInventoryPage)
  },
  {
    path: 'modal-contagem',
    loadComponent: () => import('./modais/modal-contagem/modal-contagem.page').then( m => m.ModalContagemPage)
  },
  {
    path: 'contagem-inicial',
    loadComponent: () => import('./modules/contagem-inicial/contagem-inicial.page').then( m => m.ContagemInicialPage)
  },
  {
    path: 'contagem-final',
    loadComponent: () => import('./modules/contagem-final/contagem-final.page').then( m => m.ContagemFinalPage)
  },
  {
    path: 'vendas',
    loadComponent: () => import('./modules/vendas/vendas.page').then( m => m.VendasPage)
  },
  {
    path: 'fechamento',
    loadComponent: () => import('./modules/fechamento/fechamento.page').then( m => m.FechamentoPage)
  },
  {
    path: 'lista-contagens',
    loadComponent: () => import('./lista-contagens/lista-contagens.page').then( m => m.ListaContagensPage)
  },
  { path: '**', redirectTo: 'home' }

];
