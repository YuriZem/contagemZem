import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonLabel, IonButton, IonHeader, IonToolbar, IonTitle, IonContent,IonCardHeader,IonCardContent,IonFab,IonFabButton,
  IonItem, IonList, IonCol, IonRow, IonGrid, IonInput, IonButtons,IonIcon,IonCard,IonCardTitle,IonBadge,
} from '@ionic/angular/standalone';

@NgModule({
  imports: [
    CommonModule,IonCardContent,IonBadge,IonFab,IonFabButton,
    FormsModule,IonCard,IonCardHeader,IonCardTitle,
    IonLabel, IonButton, IonHeader, IonToolbar, IonTitle, IonContent,
    IonItem, IonList, IonCol, IonRow, IonGrid, IonInput, IonButtons,IonIcon,
  ],
  exports: [
    CommonModule,IonCardContent,IonBadge,IonFab,IonFabButton,
    FormsModule,IonCard,IonCardHeader,IonCardTitle,
    IonLabel, IonButton, IonHeader, IonToolbar, IonTitle, IonContent,
    IonItem, IonList, IonCol, IonRow, IonGrid, IonInput, IonButtons,IonIcon,
  ]
})
export class SharedIonicModule {}