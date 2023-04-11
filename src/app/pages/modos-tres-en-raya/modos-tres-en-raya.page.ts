import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CabeceraComponent } from 'src/app/components/cabecera/cabecera.component';
import { PieComponent } from 'src/app/components/pie/pie.component';

@Component({
  selector: 'app-modos-tres-en-raya',
  templateUrl: './modos-tres-en-raya.page.html',
  styleUrls: ['./modos-tres-en-raya.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CabeceraComponent, PieComponent]
})
export class ModosTresEnRayaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
