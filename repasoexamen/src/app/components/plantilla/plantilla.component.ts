import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Plantilla } from 'src/app/models/plantilla';
import { PlantillaService } from 'src/app/services/plantilla.service';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css'],
})
export class PlantillaComponent implements OnInit {
  public plantilla: Array<Plantilla>;
  public empleado: Plantilla;

  constructor(
    private _service: PlantillaService,
    private _activedRoute: ActivatedRoute
  ) {
    this.plantilla = [];
  }

  cargarPlantilla() {
    this._service.getPlantilla().subscribe(
      (response) => {
        this.plantilla = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cargarEmpleado(id) {
    this._service.getEmpleado(id).subscribe((response) => {
      this.empleado = response;
    });
  }

  ngOnInit(): void {
    this._activedRoute.params.subscribe((params: Params) => {
      if (params.idEmpleado != null) {
        this.cargarEmpleado(params.idEmpleado);
      } else {
        this.cargarPlantilla();
      }
    });
  }
}
