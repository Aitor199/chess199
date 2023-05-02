import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegistroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  login() {
    // Lógica de inicio de sesión aquí

    // Navegar a la página de Dashboard
    this.router.navigate(['/login']);
  }

  registro(){
    this.router.navigate(['/login']);
  }
  llenarFormularioRegistro(){
    return true;
  }
}
