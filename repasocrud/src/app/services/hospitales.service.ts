import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { Hospitales } from '../models/hospitales';

@Injectable({
  providedIn: 'root',
})
export class HospitalesService {
  private url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.urlHospitales;
  }
  insertarHospital(hospitales: Hospitales): Observable<any> {
    let request = '/webresources/hospitales/post';
    let json = JSON.stringify(hospitales);
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + request, json, { headers: header });
  }
  getHospitales(): Observable<any> {
    let request = 'webresources/hospitales';
    return this._http.get(this.url + request);
  }
  eliminarHospital(idhospital): Observable<any> {
    let request = '/webresources/hospitales/delete' + idhospital;
    return this._http.delete(this.url + request);
  }
}
