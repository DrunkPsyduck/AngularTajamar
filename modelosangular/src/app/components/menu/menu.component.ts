import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public numeros : Array<number>;
  constructor() { }

  ngOnInit(): void {
    this.numeros = [];
    for(let i = 0 ; i <10; i++){
      let rnd = Math.floor(Math.random()*(50)+2);
      this.numeros.push(rnd);
    }
   
  }

}
