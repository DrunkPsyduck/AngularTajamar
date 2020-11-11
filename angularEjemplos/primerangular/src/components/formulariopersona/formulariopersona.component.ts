import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulariopersona',
  templateUrl: './formulariopersona.component.html',
  styleUrls: ['./formulariopersona.component.css'],
})
export class FormularioPersona implements OnInit {
  //Se declara un objeto como modelo que se desea enlazar con el formulario
  public user: any;
  public mensaje: string;
  constructor() {
    //iniciamos el modelo
    this.user = {
      nombre: '',
      apellidos: '',
      edad: 0,
    };
    this.mensaje = '';
  }
  recibirDatos() {
    this.mensaje = 'Datos recibidos';
  }

  ngOnInit(): void {}
}
