import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijocontador',
  templateUrl: './hijocontador.component.html',
  styleUrls: ['./hijocontador.component.css'],
})
export class HijocontadorComponent implements OnInit {
  @Input() inicio: number;
  @Input() idContador: number;
  //variable para saber en que numero esta el contador
  @Output() recibirIdContador = new EventEmitter();
  public numero: number;
  public mensaje: string;
  //Realizamos la llamada al padre cuando se desee
  incrementarContador(event) {
    this.numero = this.numero + 1;
    this.mensaje =
      'Contador: ' + this.idContador + ' Contador en ' + this.numero;
    //llamar al padre
    this.recibirIdContador.emit(this.idContador);
  }
  constructor() {}

  ngOnInit(): void {
    this.numero = this.inicio;
    this.mensaje =
      'Contador: ' + this.idContador + ' Contador en ' + this.numero;
  }
}
