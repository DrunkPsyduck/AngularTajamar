import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})
export class CollatzComponent implements OnInit {
  public numero : number;
  public conjetura: Array<number>;

  redirect(num){
    this._router.navigate( ["/collatz",num] );
  }
  constructor(private _activedRoute: ActivatedRoute, private _router:Router ) { 
    this.conjetura = [];
  }

  ngOnInit(): void {
    
    this._activedRoute.params.subscribe((params: Params)=>{
      this.conjetura= [];
      if(params.numero!=null){

        this.numero = parseInt(params.numero);
        while(this.numero!=1){
          let aux=0;
          if(this.numero%2==0){
            aux = this.numero/2;
          } else {
            aux = this.numero*3+1;
          }
          this.conjetura.push(aux);
          this.numero=aux;
        }
      } 
    });
  }

}
