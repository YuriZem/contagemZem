import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from './services/storage.service';
import { ModalControllerService } from './services/modalController/modal-controller.service'; 
import { ModalController } from '@ionic/angular';

import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { DataBaseService } from './core/database/database.service';
import { SeedService } from './core/database/seed.service';
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
    private db: DataBaseService, 
    private seed: SeedService
  ) {


    // this.initializeApp();
  }
  
  async ngOnInit() {
    // console.log('Inicializando banco de dados...');
    // await this.db.initializeDatabase();
    // console.log('Populando dados iniciais...');
    // await this.seed.seed();
  }

  initializeApp(): void {
    this.router.navigate(['home']);
    // this.router.navigate(['contagem-inicial']);
  }
}
