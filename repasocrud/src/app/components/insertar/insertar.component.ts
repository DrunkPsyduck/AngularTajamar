import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Hospitales } from 'src/app/models/hospitales';
import { HospitalesService } from 'src/app/services/hospitales.service';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css'],
})
export class InsertarComponent implements OnInit {
  @ViewChild('cajaid') cajaid: ElementRef;
  @ViewChild('cajanombre') cajanombre: ElementRef;
  @ViewChild('cajadireccion') cajadireccion: ElementRef;
  @ViewChild('cajatelefono') cajatelefono: ElementRef;
  @ViewChild('cajacamas') cajacamas: ElementRef;

  insertarHopsital() {
    let idHospital = parseInt(this.cajaid.nativeElement.value);
    let nombre = this.cajanombre.nativeElement.value;
    let direccion = this.cajadireccion.nativeElement.value;
    let tel = this.cajatelefono.nativeElement.value;
    let camas = parseInt(this.cajacamas.nativeElement.value);

    let hosp = new Hospitales(idHospital, nombre, direccion, tel, camas);
    this._service.insertarHospital(hosp).subscribe(
      (response) => {
        this._router.navigate(['/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  constructor(private _service: HospitalesService, private _router: Router) {
    this.cajaid = ElementRef.prototype;
    this.cajanombre = ElementRef.prototype;
    this.cajadireccion = ElementRef.prototype;
    this.cajatelefono = ElementRef.prototype;
    this.cajacamas = ElementRef.prototype;
  }

  ngOnInit(): void {}
}
