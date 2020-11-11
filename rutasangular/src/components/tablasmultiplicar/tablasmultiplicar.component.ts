import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tablasmultiplicar',
  templateUrl: './tablasmultiplicar.component.html',
  styleUrls: ['./tablasmultiplicar.component.css'],
})
export class TablasMultiplicar implements OnInit {
  public resultados: Array<number>;
  public numero: number;
  @ViewChild('cajaNumero') cajaNumero: ElementRef;

  generarTabla() {
    this.resultados = [];

    let numero = parseInt(this.cajaNumero.nativeElement.value);
    this.numero = numero;
    for (let i = 1; i <= 10; i++) {
      let res = numero * i;
      this.resultados.push(res);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
