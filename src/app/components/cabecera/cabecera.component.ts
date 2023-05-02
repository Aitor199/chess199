import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonPopover, IonicModule } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CabeceraComponent {

  constructor(private router: Router){}
  isPopoverOpen = false;
  @Input () ex!:string;
  @ViewChild ('menu', {static:true}) menu!:IonPopover;
  

  openMenu(ev: Event) {
    this.menu.event = ev;
    this.isPopoverOpen = true;
    
  }
  back(){
    this.router.navigate(['/inicio']);
  }

  cuenta(){
    this.router.navigate(['/cuenta']);
  }
  cerrarSesion(){
    this.router.navigate(['/login']);
  }
  acercaDe(){}
  
}
