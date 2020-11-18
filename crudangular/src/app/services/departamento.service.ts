import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable({
  providedIn: 'root',
})
export class DepartamentoService {
  private url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.urlcrud;
  }

  getDepartamentos(): Observable<any> {
    let request = '/api/departamentos';
    return this._http.get(this.url + request);
  }
}
