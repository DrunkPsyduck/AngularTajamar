import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './../models/persona';
import { Global } from './global';
@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  public url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.urlpersonas;
  }

  getPersonas(): Observable<any> {
    let request = '/api/personas';
    return this._http.get(this.url + request);
  }

  mostrarMensaje() {
    console.log(
      'Testing the service by the order of the Peaky fucking Blinders!'
    );
  }
}
