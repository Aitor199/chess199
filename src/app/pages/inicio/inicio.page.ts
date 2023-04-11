import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CabeceraComponent } from "../../components/cabecera/cabecera.component";
import { PieComponent } from '../../components/pie/pie.component';
import { Router } from '@angular/router';
import { VariablesCompartidasService } from 'src/app/variables-compartidas.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CabeceraComponent, PieComponent]
})
export class InicioPage implements OnInit {

  excluido = 'inicio';
  constructor(private router: Router, private variablesCompartidas: VariablesCompartidasService) {

  }

  ngOnInit() {
  }
  logout() {

  }
  ajedrez() {
    this.variablesCompartidas.nombre = 'ajedrez';
    this.router.navigate(['/modos']);
  }
  tresEnRaya() {
    this.variablesCompartidas.nombre = 'tresEnRaya';
    this.router.navigate(['/modos']);
  }
  damas() {
    this.variablesCompartidas.nombre = 'damas';
    this.router.navigate(['/modos']);
  }
  continuara() {
    this.variablesCompartidas.nombre = 'continuara';
    this.router.navigate(['/modos']);
  }
}
