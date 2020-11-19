import { Component, OnInit } from '@angular/core';
import { Plantilla } from 'src/app/models/plantilla';
import { PlantillaService } from 'src/app/services/plantilla.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {
  public empleado: Plantilla;
  constructor(
    private _service: PlantillaService,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ) {}

  buscarEmpleado(id) {
    this._service.getEmpleado(id).subscribe((response) => {
      this.empleado = response;
    });
  }
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.buscarEmpleado(params.idEmpleado);
    });
  }
}
