import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})
export class CollatzComponent implements OnInit {
  public num : number;
  public conjetura: Array<number>;

  redirect(num){
    this._router.navigate( ["/collatz",num] );
  }
  constructor(private _activedRoute: ActivatedRoute, private _router:Router ) { 
    this.conjetura = [];
  }

  ngOnInit(): void {
    console.log(this.conjetura)
    this._activedRoute.params.subscribe((params: Params)=>{
      if(params.numero!=null){

        this.num = parseInt(params.numero);
        while(this.num!=1){
          let aux=0;
          if(this.num%2==0){
            aux = this.num/2;
          } else {
            aux = this.num*3+1;
          }
          this.conjetura.push(aux);
          this.num=aux;
        }
      } 
    });
  }

}
