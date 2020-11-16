import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.apiEmpleados;
  }

  buscarEmpleadosSalario(salario: string): Observable<any> {
    let request = '/api/empleados/empleadossalario/' + salario;
    return this._http.get(this.url + request);
  }
}
