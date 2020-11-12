import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrls: ['./numerodoble.component.css']
})
export class NumerodobleComponent implements OnInit {
  //Se tienen que inyectar los dos objetos en el contructor para poder recuperarlos
  //En la inyeccion se declaran con private. CUando son inyectadas llevan _
  constructor( private _activedRoute: ActivatedRoute, private _router:Router ) { 
   
   }

  ngOnInit(): void {
     //Debemos suscribirnos para recibirlo
    //Vendran sus parametros con su :name
    this._activedRoute.params.subscribe((params: Params)=>{
      console.log(params)
    });
  }

}
