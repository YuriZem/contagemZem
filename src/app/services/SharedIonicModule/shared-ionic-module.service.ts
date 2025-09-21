import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonLabel, IonButton, IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonList, IonCol, IonRow, IonGrid, IonInput, IonButtons,IonIcon
} from '@ionic/angular/standalone';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonLabel, IonButton, IonHeader, IonToolbar, IonTitle, IonContent,
    IonItem, IonList, IonCol, IonRow, IonGrid, IonInput, IonButtons,IonIcon
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonLabel, IonButton, IonHeader, IonToolbar, IonTitle, IonContent,
    IonItem, IonList, IonCol, IonRow, IonGrid, IonInput, IonButtons,IonIcon
  ]
})
export class SharedIonicModule {}