import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PieComponent } from 'src/app/components/pie/pie.component';
import { CabeceraComponent } from 'src/app/components/cabecera/cabecera.component';
import { ModosDeJuegoComponent } from 'src/app/components/modos-de-juego/modos-de-juego.component';
import { VariablesCompartidasService } from 'src/app/variables-compartidas.service';

@Component({
  selector: 'app-modos',
  templateUrl: './modos.page.html',
  styleUrls: ['./modos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, PieComponent, CabeceraComponent, ModosDeJuegoComponent]
})
export class ModosPage implements OnInit {

  constructor(private variablesCompartidas: VariablesCompartidasService) { }
  public nombre:string = this.variablesCompartidas.nombre;
  ngOnInit() {
  }

}
