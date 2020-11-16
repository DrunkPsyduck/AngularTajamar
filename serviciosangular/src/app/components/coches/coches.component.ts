import { Component, OnInit } from '@angular/core';
import { CochesService } from './../../services/coches.service';
import { Coches } from './../../models/coches';
import { PersonajeService } from 'src/app/services/personaje.service';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css'],
})
export class CochesComponent implements OnInit {
  public coches: Array<Coches>;

  constructor(private _service: CochesService) {}

  ngOnInit(): void {
    this._service.getCoches().subscribe(
      (response) => {
        this.coches = response;
      },
      (error) => {
        console.log('oops');
      }
    );
  }
}
