import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable({
  providedIn: 'root',
})
export class HospitalesService {
  private url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.urlHospitales;
  }
  getHospitales(): Observable<any> {
    let request = '/webresources/hospitales';
    return this._http.get(this.url + request);
  }
}
