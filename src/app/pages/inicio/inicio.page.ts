import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CabeceraComponent } from "../../components/cabecera/cabecera.component";
import { PieComponent } from '../../components/pie/pie.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CabeceraComponent, PieComponent]
})
export class InicioPage implements OnInit {

  excluido = 'inicio';
  constructor(private router: Router) {

  }

  ngOnInit() {
  }
  logout() {

  }
  ajedrez() {
    this.router.navigate(['/modos-ajedrez']);
  }
  tresEnRaya() {
    this.router.navigate(['/modos-tres-en-raya']);
  }
  damas() {
    this.router.navigate(['/modos-damas']);
  }
  continuara() {
    
  }
}
