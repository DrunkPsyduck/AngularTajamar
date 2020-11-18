import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Hospitales } from 'src/app/models/hospitales';
import { HospitalesService } from 'src/app/services/hospitales.service';
import { HospitalesComponent } from '../hospitales/hospitales.component';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css'],
})
export class ModificarComponent implements OnInit {
  public hospital: Hospitales;
  @ViewChild('cajaid') cajaid: ElementRef;
  @ViewChild('cajanombre') cajanombre: ElementRef;
  @ViewChild('cajadireccion') cajadireccion: ElementRef;
  @ViewChild('cajatelefono') cajatelefono: ElementRef;
  @ViewChild('cajacamas') cajacamas: ElementRef;

  constructor(
    private _service: HospitalesService,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ) {}

  buscarHospital(idhospital) {
    this._service.buscarhospital(idhospital).subscribe((response) => {
      this.hospital = response;
    });
  }

  updateHospital() {
    let idhospital = parseInt(this.cajaid.nativeElement.value);
    let nombre = this.cajanombre.nativeElement.value;
    let direccion = this.cajadireccion.nativeElement.value;
    let tel = this.cajatelefono.nativeElement.value;
    let camas = parseInt(this.cajacamas.nativeElement.value);

    let hosp = new Hospitales(idhospital, nombre, direccion, tel, camas);
    this._service.updateHospital(hosp).subscribe(
      (response) => {
        this._router.navigate(['/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.buscarHospital(params.idhospital);
    });
  }
}
