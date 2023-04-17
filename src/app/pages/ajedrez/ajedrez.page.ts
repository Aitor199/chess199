import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonPopover, IonicModule } from '@ionic/angular';
import { TableroComponent } from 'src/app/components/tablero/tablero.component';
import { CabeceraComponent } from 'src/app/components/cabecera/cabecera.component';
import { PieComponent } from 'src/app/components/pie/pie.component';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

interface datosPieza {
  id: string,
  casilla: string,
  color: string,
  jaque?: boolean,
  puedeComer?: boolean,
  moverse?: boolean
}

@Component({
  selector: 'app-ajedrez',
  templateUrl: './ajedrez.page.html',
  styleUrls: ['./ajedrez.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TableroComponent, CabeceraComponent, PieComponent]
})

export class AjedrezPage implements OnInit {

  backCasilla: string = "prueba";
  idPieza!: datosPieza;
  PiezaAnterior!: datosPieza;
  turnoBlanco: boolean = true;
  ultimoMovimiento: any;
  columnas = [8, 7, 6, 5, 4, 3, 2, 1];
  filas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  nombreCasilla = '';
  colorPieza = '';
  turno = '';
  numeroTurno = 0;

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


  generaTablero(row: number, col: string) {
    this.nombreCasilla = `${col + row}`;
    let posArray = this.conversorLetraNumero(this.nombreCasilla);
    let posicion1: number = parseInt(posArray[0]);
    let posicion2: number = parseInt(posArray[1]);
    if (this.piezas[posicion1][posicion2].includes('Blanco') || this.piezas[posicion1][posicion2].includes('Blanca')) {
      this.colorPieza = 'blanco';
    } else {
      this.colorPieza = 'negro'
    }
    if (this.numeroTurno % 2 === 0) {
      this.turno = 'blancas';

    } else {
      this.turno = 'negras'
    }
    let idPieza = this.conversorNumeroLetra(this.ultimoMovimiento);
    const elemento = document.getElementById(idPieza) as HTMLElement
    if (!!elemento) {

      let img = elemento.querySelector("img") as HTMLImageElement;
      if (!!img) {
        img.classList.add('anularEventos');
      }

    };
    this.idPieza = {
      id: this.piezas[posicion1][posicion2],
      casilla: this.nombreCasilla,
      color: this.colorPieza,
      puedeComer: false,
      moverse: true
    }
    return (row % 2 === 0 && this.filas.indexOf(col) % 2 === 0) ||
      (row % 2 === 1 && this.filas.indexOf(col) % 2 === 1);
  }

  pieza(ev: any) {
    this.borrarPosibilidades();
    const datosPieza: datosPieza = JSON.parse(ev.target.id);

    this.PiezaAnterior = datosPieza;
    console.log(datosPieza);
    if (this.turno === 'blancas') {
      if (datosPieza.id === 'PeonBlanco') {
        this.movPeon(datosPieza);
      }
    } else if (this.turno === 'negras') {
      if (datosPieza.id === 'PeonNegro') {
        this.movPeon(datosPieza);
      }
    }
  }

  mouseout(ev: any) {
    const pieza = ev.target as HTMLElement;
    pieza.classList.remove('cursor');

  }

  mouseenter(ev: any) {
    const datosPieza: datosPieza = JSON.parse(ev.target.id);
    let posArray = this.conversorLetraNumero(datosPieza.casilla);
    let posicion1: number = parseInt(posArray[0]);
    let posicion2: number = parseInt(posArray[1]);
    if (this.turno === 'blancas' && this.piezas[posicion1][posicion2].includes('Blanco') || this.piezas[posicion1][posicion2].includes('Blanca')) {
      const pieza = ev.target as HTMLElement;
      pieza.classList.add('cursor');
    } else if (this.turno === 'negras' && this.piezas[posicion1][posicion2].includes('Negro') || this.piezas[posicion1][posicion2].includes('Negra')) {
      const pieza = ev.target as HTMLElement;
      pieza.classList.add('cursor');
    }

  }

  casilla(ev: any) {
    console.log(ev.target);
    const idCasilla = ev.target.id;
    const existeClase = document.getElementById(idCasilla);
    if (existeClase?.classList.contains('posibilidades')) {
      console.log(this.PiezaAnterior);
      let numeroConvertido = this.conversorLetraNumero(this.PiezaAnterior.casilla);
      let numero1: number = parseInt(numeroConvertido[0]);
      let numero2: number = parseInt(numeroConvertido[1]);
      this.piezas[numero1][numero2] = '';
      numero1 = parseInt(this.conversorLetraNumero(idCasilla)[0]);
      numero2 = parseInt(this.conversorLetraNumero(idCasilla)[1]);
      this.borrarPosibilidades();
      let idPieza = this.conversorNumeroLetra(this.ultimoMovimiento);
      const elemento = document.getElementById(idPieza) as HTMLElement
      if (!!elemento) {

        let img = elemento.querySelector("img") as HTMLImageElement;
        if (!!img) {
          img.classList.remove('anularEventos');
        }

      };
      this.ultimoMovimiento = (String(numero1) + String(numero2));
      this.piezas[numero1][numero2] = this.PiezaAnterior.id;
      this.numeroTurno++;

    }
  }

  movPeon(datos: datosPieza) {
    let letra: string = (datos.casilla[0]);
    let numero: number = parseInt(datos.casilla[1]);
    let casilla: any;
    let numeroConvertido = this.conversorLetraNumero(datos.casilla);
    let numero1: number = parseInt(numeroConvertido[0]);
    let numero2: number = parseInt(numeroConvertido[1]);
    numero1--;
    if (datos.id === 'PeonBlanco' && this.piezas[numero1][numero2] !== '') {
      datos.moverse = false;
    } else {
      datos.moverse = true;
    }
    if (datos.moverse) {
      if (datos.id === 'PeonBlanco' && datos.casilla[1] === '2') {
        numero++;
        casilla = document.getElementById(letra + numero);
        if (!!casilla) {
          casilla.classList.add('posibilidades');
        }
        numero++;
        casilla = document.getElementById(letra + numero);
        if (!!casilla) {
          casilla.classList.add('posibilidades');
        }
      } else if (datos.id === 'PeonBlanco' && datos.casilla[1] !== '2') {
        numero++;
        casilla = document.getElementById(letra + numero);
        if (!!casilla) {
          casilla.classList.add('posibilidades');
        }

      }
    }
    numero1 = parseInt(numeroConvertido[0]);
    numero2 = parseInt(numeroConvertido[1]);
    numero1++;
    if (datos.id === 'PeonNegro' && this.piezas[numero1][numero2] !== '') {
      datos.moverse = false;
    } else {
      datos.moverse = true;
    }
    if (datos.moverse) {
      if (datos.id === 'PeonNegro' && datos.casilla[1] === '7') {
        numero--;
        casilla = document.getElementById(letra + numero);
        if (!!casilla) {
          casilla.classList.add('posibilidades');
        }
        numero--;
        casilla = document.getElementById(letra + numero);
        if (!!casilla) {
          casilla.classList.add('posibilidades');
        }
      } else if (datos.id === 'PeonNegro' && datos.casilla[1] !== '7') {
        numero--;
        casilla = document.getElementById(letra + numero);
        if (!!casilla) {
          casilla.classList.add('posibilidades');
        }
      }
    }
    // comprobaciones para el ataque de los peones
    if ((datos.id === 'PeonNegro' || datos.id === 'PeonBlanco') && (datos.casilla[1] !== '1' && datos.casilla[1] !== '8')) {
      let letraPeon = String(datos.casilla[0]);
      let numeroPeon = Number(datos.casilla[1]);
      let posibilidades;
      let pos1;
      let pos2;
      let numeroLetraPeon = this.filas.indexOf(letraPeon);
      let datosPiezaAtacada: datosPieza;

      if (datos.id === 'PeonNegro') {
        numeroPeon--;
      } else {
        numeroPeon++;
      }
      if (letraPeon === 'a') {
        numeroLetraPeon++;
        posibilidades = this.conversorLetraNumero(this.filas[numeroLetraPeon] + numeroPeon);
        let casillaAtacada = document.getElementById(this.filas[numeroLetraPeon] + numeroPeon) as HTMLTableCellElement;
        let img = casillaAtacada.querySelector("img") as HTMLImageElement;
        if (!!img) {
          datosPiezaAtacada = JSON.parse(img.id)
        }
        pos1 = parseInt(posibilidades[0]);
        pos2 = parseInt(posibilidades[1]);

        if (this.piezas[pos1][pos2] !== '' && datos.color !== datosPiezaAtacada!.color) {
          casilla = document.getElementById(this.filas[numeroLetraPeon] + numeroPeon);
          casilla.classList.add('posibilidades');
        }

      } else if (letraPeon === 'h') {
        numeroLetraPeon--;
        posibilidades = this.conversorLetraNumero(this.filas[numeroLetraPeon] + numeroPeon);
        let casillaAtacada = document.getElementById(this.filas[numeroLetraPeon] + numeroPeon) as HTMLTableCellElement;
        let img = casillaAtacada.querySelector("img") as HTMLImageElement;
        if (!!img) {
          datosPiezaAtacada = JSON.parse(img.id)
        }
        pos1 = parseInt(posibilidades[0]);
        pos2 = parseInt(posibilidades[1]);
        if (this.piezas[pos1][pos2] !== '' && datos.color !== datosPiezaAtacada!.color) {
          casilla = document.getElementById(this.filas[numeroLetraPeon] + numeroPeon);
          casilla.classList.add('posibilidades');
        }
      } else {
        numeroLetraPeon--;
        posibilidades = this.conversorLetraNumero(this.filas[numeroLetraPeon] + numeroPeon);
        let casillaAtacada = document.getElementById(this.filas[numeroLetraPeon] + numeroPeon) as HTMLTableCellElement;
        let img = casillaAtacada.querySelector("img") as HTMLImageElement;
        if (!!img) {
          datosPiezaAtacada = JSON.parse(img.id)
        }
        pos1 = parseInt(posibilidades[0]);
        pos2 = parseInt(posibilidades[1]);
        if (this.piezas[pos1][pos2] !== '' && datos.color !== datosPiezaAtacada!.color) {
          casilla = document.getElementById(this.filas[numeroLetraPeon] + numeroPeon);
          let casillaAtacada = document.getElementById(this.filas[numeroLetraPeon] + numeroPeon) as HTMLTableCellElement;
          let img = casillaAtacada.querySelector("img") as HTMLImageElement;
          if (!!img) {
            datosPiezaAtacada = JSON.parse(img.id)
          }
          casilla.classList.add('posibilidades');
        }
        numeroLetraPeon = numeroLetraPeon + 2;
        posibilidades = this.conversorLetraNumero(this.filas[numeroLetraPeon] + numeroPeon);
        casillaAtacada = document.getElementById(this.filas[numeroLetraPeon] + numeroPeon) as HTMLTableCellElement;
        img = casillaAtacada.querySelector("img") as HTMLImageElement;
        if (!!img) {
          datosPiezaAtacada = JSON.parse(img.id)
        }

        pos1 = parseInt(posibilidades[0]);
        pos2 = parseInt(posibilidades[1]);
        if (this.piezas[pos1][pos2] !== '' && datos.color !== datosPiezaAtacada!.color) {
          casilla = document.getElementById(this.filas[numeroLetraPeon] + numeroPeon);
          casilla.classList.add('posibilidades');
        }
      }
    }
  }


  borrarPosibilidades() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        let casilla: any = document.getElementById(this.filas[i] + this.columnas[j]);

        casilla.classList.remove('posibilidades');
      }

    }

  }



  conversorLetraNumero(posicion: string) {
    switch (posicion) {
      case 'a8': return '00';
      case 'b8': return '01';
      case 'c8': return '02';
      case 'd8': return '03';
      case 'e8': return '04';
      case 'f8': return '05';
      case 'g8': return '06';
      case 'h8': return '07';

      case 'a7': return '10';
      case 'b7': return '11';
      case 'c7': return '12';
      case 'd7': return '13';
      case 'e7': return '14';
      case 'f7': return '15';
      case 'g7': return '16';
      case 'h7': return '17';

      case 'a6': return '20';
      case 'b6': return '21';
      case 'c6': return '22';
      case 'd6': return '23';
      case 'e6': return '24';
      case 'f6': return '25';
      case 'g6': return '26';
      case 'h6': return '27';

      case 'a5': return '30';
      case 'b5': return '31';
      case 'c5': return '32';
      case 'd5': return '33';
      case 'e5': return '34';
      case 'f5': return '35';
      case 'g5': return '36';
      case 'h5': return '37';

      case 'a4': return '40';
      case 'b4': return '41';
      case 'c4': return '42';
      case 'd4': return '43';
      case 'e4': return '44';
      case 'f4': return '45';
      case 'g4': return '46';
      case 'h4': return '47';

      case 'a3': return '50';
      case 'b3': return '51';
      case 'c3': return '52';
      case 'd3': return '53';
      case 'e3': return '54';
      case 'f3': return '55';
      case 'g3': return '56';
      case 'h3': return '57';

      case 'a2': return '60';
      case 'b2': return '61';
      case 'c2': return '62';
      case 'd2': return '63';
      case 'e2': return '64';
      case 'f2': return '65';
      case 'g2': return '66';
      case 'h2': return '67';

      case 'a1': return '70';
      case 'b1': return '71';
      case 'c1': return '72';
      case 'd1': return '73';
      case 'e1': return '74';
      case 'f1': return '75';
      case 'g1': return '76';
      case 'h1': return '77';
      default: return '';
    }
  }

  conversorNumeroLetra(posicion: string) {
    switch (posicion) {
      case '00': return 'a8';
      case '01': return 'b8';
      case '02': return 'c8';
      case '03': return 'd8';
      case '04': return 'e8';
      case '05': return 'f8';
      case '06': return 'g8';
      case '07': return 'h8';

      case '10': return 'a7';
      case '11': return 'b7';
      case '12': return 'c7';
      case '13': return 'd7';
      case '14': return 'e7';
      case '15': return 'f7';
      case '16': return 'g7';
      case '17': return 'h7';

      case '20': return 'a6';
      case '21': return 'b6';
      case '22': return 'c6';
      case '23': return 'd6';
      case '24': return 'e6';
      case '25': return 'f6';
      case '26': return 'g6';
      case '27': return 'h6';

      case '30': return 'a5';
      case '31': return 'b5';
      case '32': return 'c5';
      case '33': return 'd5';
      case '34': return 'e5';
      case '35': return 'f5';
      case '36': return 'g5';
      case '37': return 'h5';

      case '40': return 'a4';
      case '41': return 'b4';
      case '42': return 'c4';
      case '43': return 'd4';
      case '44': return 'e4';
      case '45': return 'f4';
      case '46': return 'g4';
      case '47': return 'h4';

      case '50': return 'a3';
      case '51': return 'b3';
      case '52': return 'c3';
      case '53': return 'd3';
      case '54': return 'e3';
      case '55': return 'f3';
      case '56': return 'g3';
      case '57': return 'h3';

      case '60': return 'a2';
      case '61': return 'b2';
      case '62': return 'c2';
      case '63': return 'd2';
      case '64': return 'e2';
      case '65': return 'f2';
      case '66': return 'g2';
      case '67': return 'h2';

      case '70': return 'a1';
      case '71': return 'b1';
      case '72': return 'c1';
      case '73': return 'd1';
      case '74': return 'e1';
      case '75': return 'f1';
      case '76': return 'g1';
      case '77': return 'h1';
      default: return '';
    }
  }
}
