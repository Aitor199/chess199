import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CabeceraComponent {

  constructor(private menuController: MenuController) { }

  openMenu() {
    this.menuController.toggle();
  }
  
}
