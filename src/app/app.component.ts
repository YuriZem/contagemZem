import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from './services/storage.service';
import { ModalControllerService } from './services/modalController/modal-controller.service'; 
import { ModalController } from '@ionic/angular';

import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { DataBaseService } from './services/dataBase/data-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
  providers: [Storage, StorageService,ModalController,ModalControllerService,DataBaseService,] // Adicione aqui
})
export class AppComponent {
  constructor(
    private router: Router,

  ) {
    this.initializeApp();
  }


  initializeApp(): void {
    this.router.navigate(['home']);
  }
}
