import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ajedrez',
  templateUrl: './ajedrez.page.html',
  styleUrls: ['./ajedrez.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AjedrezPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
