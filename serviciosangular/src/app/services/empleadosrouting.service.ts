import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { Global } from './global';
@Injectable({
  providedIn: 'root',
})
export class EmpleadosroutingService {
  private url: string;

  constructor(private _http: HttpClient) {
    this.url = Global.apiEmpleados;
  }

  getEmpleados(): Observable<any> {
    let request = '/api/empleados/';
    return this._http.get(this.url + request);
  }
  buscarEmpleado(idempleados: string): Observable<any> {
    let request = './api/empleados/' + idempleados;
    return this._http.get(this.url + request);
  }
}
