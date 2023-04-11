import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CabeceraComponent } from 'src/app/components/cabecera/cabecera.component';
import { PieComponent } from 'src/app/components/pie/pie.component';

@Component({
  selector: 'app-modos-damas',
  templateUrl: './modos-damas.page.html',
  styleUrls: ['./modos-damas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CabeceraComponent, PieComponent]
})
export class ModosDamasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
