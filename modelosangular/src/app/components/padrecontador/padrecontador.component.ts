import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padrecontador',
  templateUrl: './padrecontador.component.html',
  styleUrls: ['./padrecontador.component.css'],
})
export class PadrecontadorComponent implements OnInit {
  public numeros: Array<number>;
  public mensaje: string;
  constructor() {
    this.numeros = [2, 8, 23, 34];
  }

  //Se necesita un metodo para recibir el id del contador del hijo
  recibirIdContador(event) {
    this.mensaje = 'Contador incrementando: ' + event;
  }

  ngOnInit(): void {}
}
