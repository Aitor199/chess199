import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CabeceraComponent } from 'src/app/components/cabecera/cabecera.component';
import { PieComponent } from 'src/app/components/pie/pie.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modos-ajedrez',
  templateUrl: './modos-ajedrez.page.html',
  styleUrls: ['./modos-ajedrez.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CabeceraComponent, PieComponent]
})
export class ModosAjedrezPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  IA(){
    this.router.navigate(['/ajedrez']);
  }
  LOCAL(){
    this.router.navigate(['/ajedrez']);
  }

  guardado(){
    return true;
  }
  PartidaGuardada(){
    
  }
}
