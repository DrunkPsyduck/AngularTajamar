import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosroutingService } from 'src/app/services/empleadosrouting.service';

@Component({
  selector: 'app-tablaempleado',
  templateUrl: './tablaempleado.component.html',
  styleUrls: ['./tablaempleado.component.css'],
  providers: [EmpleadosroutingService],
})
export class TablaempleadoComponent implements OnInit {
  public empleados: Array<Empleado>;

  constructor(private _service: EmpleadosroutingService) {}

  ngOnInit(): void {
    this._service.getEmpleados().subscribe((response) => {
      this.empleados = response;
    });
  }
}
