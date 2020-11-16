import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coches } from './../models/coches';
import { Global } from './global';

@Injectable({
  providedIn: 'root',
})
export class CochesService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = Global.urlCoches;
  }

  getCoches(): Observable<any> {
    let request = '/webresources/coches';
    return this._http.get(this.url + request);
  }
}
