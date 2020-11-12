import { Component, OnInit } from '@angular/core';
import {Producto} from "./../../models/producto";

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})
export class ListaproductosComponent implements OnInit {
  //Declaracion de variable del tipo modelo prodcuto
  public producto: Producto;

  constructor() {
    // cuando se utilizan modelos se utiliza la pala new para crear objetos
    //en el momento que se crea el new entra al constructor del modelo

    this.producto = new Producto();
    this.producto.nombre = "Err";
    this.producto.imagen ="../../../assets/imagenes/supra.jpg";
    this.producto.precio= 50;
  }

  ngOnInit(): void {
  }

}
