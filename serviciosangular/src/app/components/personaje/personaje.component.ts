import { Component, OnInit } from '@angular/core';
import { PersonajeService } from './../../services/personaje.service';
import { Personaje } from './../../models/personaje';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css'],
  providers: [PersonajeService],
})
export class PersonajeComponent implements OnInit {
  public personajes: Array<Personaje>;

  constructor(private _personajeService: PersonajeService) {}

  ngOnInit(): void {
    this._personajeService.getMessagge();
    this.personajes = this._personajeService.getPersonajes();
  }
}
