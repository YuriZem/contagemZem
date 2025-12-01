import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { SharedIonicModule } from 'src/app/services/SharedIonicModule/shared-ionic-module.service';

@Component({
  selector: 'app-vendas',
  templateUrl: 'vendas.page.html',
  imports: [SharedIonicModule,],
  styleUrls: ['vendas.page.scss'],
  standalone: true,
})
export class VendasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
