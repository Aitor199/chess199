import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PieComponent  {

  constructor() { }


}
