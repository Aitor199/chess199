import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CabeceraComponent } from 'src/app/components/cabecera/cabecera.component';
import { PieComponent } from 'src/app/components/pie/pie.component';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,CabeceraComponent,PieComponent]
})
export class CuentaPage implements OnInit {
username:string= 'a';
email:string ='a@a';
password = 'a';
  constructor() { }

  ngOnInit() {
  }
  cambiar(){
    
  }
}
