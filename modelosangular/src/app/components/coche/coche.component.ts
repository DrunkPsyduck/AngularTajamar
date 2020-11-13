import { Component, Input, OnInit } from '@angular/core';
import { Coche } from 'src/app/models/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css'],
})
export class CocheComponent implements OnInit {
  @Input() car: Coche;
  public mensaje: string;
  @Input() marca: string;

  constructor() {
    //Con objeto s no se utiliza el constructor
  }

  comprobarEstado() {
    if (!this.car.estado) {
      this.mensaje = 'El motor esta apagado.';
      this.car.velocidad = 0;
      return false;
    } else {
      this.mensaje = 'El motor esta encendido';
      return true;
    }
  }

  encenderCoche() {
    this.car.estado = !this.car.estado;
    this.comprobarEstado();
  }
  acelerarCoche() {
    if (!this.comprobarEstado()) {
      alert('El coche no esta encencido');
    } else {
      this.car.velocidad = this.car.velocidad + this.car.aceleracion;
      if (this.car.velocidad >= this.car.velocidadmaxima) {
        this.car.velocidad = this.car.velocidadmaxima;
      }
    }
  }

  ngOnInit(): void {
    this.comprobarEstado();
  }
}
