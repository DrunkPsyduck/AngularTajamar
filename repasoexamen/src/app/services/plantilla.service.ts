import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { Plantilla } from '../models/plantilla';

@Injectable({
  providedIn: 'root',
})
export class PlantillaService {
  private url = Global.hospitales;
  constructor(private _http: HttpClient) {}

  getPlantilla(): Observable<any> {
    let request = 'api/plantilla';
    return this._http.get(this.url + request);
  }

  getEmpleado(idEmpleado): Observable<any> {
    let request = 'api/plantilla/' + idEmpleado;
    return this._http.get(this.url + request);
  }

  getFunciones(): Observable<any> {
    let request = '/api/plantilla/funciones';
    return this._http.get(this.url + request);
  }

  updateSalario(departamento, salario): Observable<any> {
    let request = '/api/plantilla/' + departamento + '/' + salario;
    return this._http.put(this.url + request, null);
  }

  getOficios(oficio): Observable<any> {
    let request = '/api/plantilla/plantillafuncion/' + oficio;
    return this._http.get(this.url + request);
  }
}
