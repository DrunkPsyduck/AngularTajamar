import { Component, OnInit } from '@angular/core';
import { EmpleadosroutingService } from './../../services/empleadosrouting.service';
import { Empleado } from './../../models/empleado';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-detallesempleado',
  templateUrl: './detallesempleado.component.html',
  styleUrls: ['./detallesempleado.component.css'],
  providers: [EmpleadosroutingService],
})
export class DetallesempleadoComponent implements OnInit {
  public empleado: Empleado;

  constructor(
    private _service: EmpleadosroutingService,
    private _activeRoute: ActivatedRoute
  ) {}

  buscarEmpleado(empno) {
    this._service.buscarEmpleado(empno).subscribe(
      (response) => {
        this.empleado = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let empno = params.empno;
      this.buscarEmpleado(empno);
    });
  }
}
