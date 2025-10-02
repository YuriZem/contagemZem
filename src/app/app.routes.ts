import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
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
];
