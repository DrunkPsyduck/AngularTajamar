import { Component, OnInit } from '@angular/core';
import { Coche } from './../../models/coche';
@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.css'],
})
export class ConcesionarioComponent implements OnInit {
  public coches: Array<Coche>;
  constructor() {
    this.coches = [
      new Coche('Alfa Romeo', '4C', 0, 320, 30, false),
      new Coche('Honda', 'NSX', 0, 350, 35, false),
      new Coche('Ferrari', '480', 0, 320, 25, false),
    ];
  }

  ngOnInit(): void {}
}
