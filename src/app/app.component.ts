import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from './services/storage.service';
import { ModalControllerService } from './services/modalController/modal-controller.service'; 
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet,],
  providers: [Storage, StorageService,ModalController,ModalControllerService] // Adicione aqui
})
export class AppComponent {
  constructor() {}
}
