import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'modos-ajedrez',
    loadComponent: () => import('./pages/modos-ajedrez/modos-ajedrez.page').then( m => m.ModosAjedrezPage)
  },
  {
    path: 'modos-tres-en-raya',
    loadComponent: () => import('./pages/modos-tres-en-raya/modos-tres-en-raya.page').then( m => m.ModosTresEnRayaPage)
  },
  {
    path: 'modos-damas',
    loadComponent: () => import('./pages/modos-damas/modos-damas.page').then( m => m.ModosDamasPage)
  },
  {
    path: 'ajedrez',
    loadComponent: () => import('./pages/ajedrez/ajedrez.page').then( m => m.AjedrezPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./pages/registro/registro.page').then( m => m.RegistroPage)
  },



];
