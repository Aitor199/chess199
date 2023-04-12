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

  isWhite(row: number, col: string) {
    return (row % 2 === 0 && this.cols.indexOf(col) % 2 === 0) ||
           (row % 2 === 1 && this.cols.indexOf(col) % 2 === 1);
  }
}
