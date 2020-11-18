import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { Departamento } from '../models/departamento';

@Injectable({
  providedIn: 'root',
})
export class DepartamentoService {
  private url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.urlcrud;
  }

  insertarDepartamentos(departamento: Departamento): Observable<any> {
    let request = '/api/departamentos';
    let json = JSON.stringify(departamento);
    //para enviar la información al servicio se realiza mediante cabeceras.
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + request, json, { headers: header });
  }

  getDepartamentos(): Observable<any> {
    let request = '/api/departamentos';
    return this._http.get(this.url + request);
  }

  eliminarDepartamento(iddepartamento: string): Observable<any> {
    let request = '/api/departamentos/' + iddepartamento;
    return this._http.delete(this.url + request);
  }
}
