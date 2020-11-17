import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private url: string;

  constructor(private _http: HttpClient) {
    this.url = Global.urlPeliculas;
  }

  getPeliculas() {
    let request = '/api/Peliculas';
    return this._http.get(this.url + request);
  }

  getGeneros() {
    let request = '/api/Generos';
    return this._http.get(this.url + request);
  }
}
