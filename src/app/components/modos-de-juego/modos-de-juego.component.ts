import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CabeceraComponent } from '../cabecera/cabecera.component';
import { PieComponent } from '../pie/pie.component';
import { VariablesCompartidasService } from 'src/app/variables-compartidas.service';

@Component({
  selector: 'app-modos-de-juego',
  templateUrl: './modos-de-juego.component.html',
  styleUrls: ['./modos-de-juego.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CabeceraComponent, PieComponent]
})
export class ModosDeJuegoComponent {
  constructor(private variablesCompartidas: VariablesCompartidasService) {
    console.log(this.variablesCompartidas.nombre);

  }
  public nombre = this.variablesCompartidas.nombre;

  

}
