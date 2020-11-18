import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Hospitales } from 'src/app/models/hospitales';
import { HospitalesService } from 'src/app/services/hospitales.service';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css'],
})
export class HospitalesComponent implements OnInit {
  public hospitales: Array<Hospitales>;
  constructor(
    private _service: HospitalesService,
    private _activedRoute: ActivatedRoute
  ) {
    this.hospitales = [];
  }

  cargarHospitales() {
    this._service.getHospitales().subscribe(
      (response) => {
        this.hospitales = response;
        console.log(this.hospitales);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  eliminarHospital(idhosp) {
    this._service.eliminarHospital(idhosp).subscribe((response) => {
      this.cargarHospitales();
    });
  }
  ngOnInit(): void {
    this._activedRoute.params.subscribe((params: Params) => {
      if (params.idhospital != null) {
        this.eliminarHospital(params.idhospital);
      } else {
        this.cargarHospitales();
      }
    });
  }
}
