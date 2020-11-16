import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmpleadoService } from './../../services/empleado.service';
import { Empleado } from './../../models/empleado';

@Component({
  selector: 'app-empleados-oficio',
  templateUrl: './empleados-oficio.component.html',
  styleUrls: ['./empleados-oficio.component.css'],
  providers: [EmpleadoService],
})
export class EmpleadosOficioComponent implements OnInit {
  public oficios: Array<Empleado>;
  public empleados: Array<Empleado>;
  @ViewChild('cajadepartamento') cajadepartamento: ElementRef;

  buscarOficio() {
    this._service.buscarOficio().subscribe(
      (response) => {
        this.oficios = response;
        console.log(this.oficios);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  buscarEmpleadoDepartamento() {
    let dept = this.cajadepartamento.nativeElement.value;
    this._service.buscarEmpleadosSalario(dept).subscribe(
      (response) => {
        this.empleados = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  constructor(private _service: EmpleadoService) {
    this.oficios = [];
    this.empleados = [];
  }

  ngOnInit(): void {
    this.buscarOficio();
  }
}
