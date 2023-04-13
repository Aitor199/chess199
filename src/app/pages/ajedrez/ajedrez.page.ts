import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonPopover, IonicModule } from '@ionic/angular';
import { TableroComponent } from 'src/app/components/tablero/tablero.component';
import { CabeceraComponent } from 'src/app/components/cabecera/cabecera.component';
import { PieComponent } from 'src/app/components/pie/pie.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajedrez',
  templateUrl: './ajedrez.page.html',
  styleUrls: ['./ajedrez.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TableroComponent, CabeceraComponent, PieComponent]
})
export class AjedrezPage implements OnInit {

  piezas = [
    ['TorreNegra', 'CaballoNegro', 'AlfilNegro', 'ReinaNegra', 'ReyNegro', 'AlfilNegro', 'CaballoNegro', 'TorreNegra'],
    ['PeonNegro', 'PeonNegro', 'PeonNegro', 'PeonNegro', 'PeonNegro', 'PeonNegro', 'PeonNegro', 'PeonNegro'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['PeonBlanco', 'PeonBlanco', 'PeonBlanco', 'PeonBlanco', 'PeonBlanco', 'PeonBlanco', 'PeonBlanco', 'PeonBlanco'],
    ['TorreBlanca', 'CaballoBlanco', 'AlfilBlanco', 'ReinaBlanca', 'ReyBlanco', 'AlfilBlanco', 'CaballoBlanco', 'TorreBlanca']
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  @ViewChild('menu', { static: true }) menu!: IonPopover;

  isPopoverOpen = false;
  openMenu(ev: Event) {
    this.menu.event = ev;
    this.isPopoverOpen = true;

  }
  back() {
    this.router.navigate(['/modos-ajedrez']);
  }

  cuenta() { }
  ajustes() { }
  cerrarSesion() { }
  acercaDe() { }
  rows = [8, 7, 6, 5, 4, 3, 2, 1];
  cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  nombreCasilla = 'x2';
  isWhite(row: number, col: string) {
    this.nombreCasilla = `${col + row}`;
    return (row % 2 === 0 && this.cols.indexOf(col) % 2 === 0) ||
      (row % 2 === 1 && this.cols.indexOf(col) % 2 === 1);
  }
  casilla(ev: any) {
    console.log(ev.target);
    console.log(this.conversor(ev.target.id));
    
  }

  conversor(posicion:string){
    switch(posicion){
      case 'a8': return '00';
      case 'b8': return '01';
      case 'c8': return '02';
      case 'd8': return '03';
      case 'e8': return '04';
      case 'f8': return '05';
      case 'g8': return '06';
      case 'h8': return '07';
      default: return '';
    }
  }
}
