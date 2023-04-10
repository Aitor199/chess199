import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CabeceraComponent } from "../../components/cabecera/cabecera.component";
import { PieComponent } from '../../components/pie/pie.component';


@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.page.html',
    styleUrls: ['./inicio.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, CabeceraComponent, PieComponent]
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  logout() {

  }
  irPagina1(){
console.log('hola soy 1');

  }
  irPagina2(){

  }
  irPagina3(){

  }
  irPagina4(){

  }
}
