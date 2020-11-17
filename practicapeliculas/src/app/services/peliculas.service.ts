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

  getPeliculas(): Observable<any> {
    let request = '/api/Peliculas';
    return this._http.get(this.url + request);
  }

  getPeliculaGen(gen): Observable<any> {
    let request = '/api/peliculasgenero/' + gen;
    return this._http.get(this.url + request);
  }
  getGeneros(): Observable<any> {
    let request = '/api/Generos/';
    return this._http.get(this.url + request);
  }
}
