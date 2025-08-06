import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {IonButton, IonHeader, IonToolbar, IonTitle, IonContent,IonItem, IonList,IonCol,IonRow,IonGrid} from '@ionic/angular/standalone';
import { StorageService } from '../services/storage.service';

// import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton,IonHeader, IonToolbar, IonTitle, IonContent,IonItem, IonList,IonCol,IonRow,IonGrid,CommonModule],
  // providers: [Storage]
})
export class HomePage {
items = [
  { name: 'Item 1', visible: true },
  { name: 'Item 2', visible: false },
  { name: 'Item 3', visible: true }
];
  constructor(
    private storageService: StorageService
  ) {}

  async ngOnInit() {
    await this.storageService.init();
    await this.storageService.set('PRODUTOS',this.items);
    const valor = await this.storageService.get('key');
    console.log(valor);
  }
}
