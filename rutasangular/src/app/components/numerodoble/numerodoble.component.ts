import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrls: ['./numerodoble.component.css']
})
export class NumerodobleComponent implements OnInit {
  public doble: number;
  public numero: number;
  //Se tienen que inyectar los dos objetos en el contructor para poder recuperarlos
  //En la inyeccion se declaran con private. CUando son inyectadas llevan _
  constructor( private _activedRoute: ActivatedRoute, private _router:Router ) { 
   
   }

  ngOnInit(): void {
     //Debemos suscribirnos para recibirlo
    //Vendran sus parametros con su :name
    this._activedRoute.params.subscribe((params: Params)=>{
      //Se han creado rutas sin numero, comprobamos que existe parametro
      if(params.numero!=null){
        //Los parametros son string aunque sean númericos
        this.numero = parseInt(params.numero);
        this.doble = this.numero*2;
      } else {
        console.log('No params')
      }
    });
  }

}
