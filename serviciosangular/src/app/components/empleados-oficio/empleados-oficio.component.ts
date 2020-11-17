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
  public oficios: Array<string>;
  public empleados: Array<Empleado>;
  @ViewChild('selectoficio') selectoficio: ElementRef;

  buscarOficio() {
    this._service.buscarOficio().subscribe(
      (response) => {
        this.oficios = response;
        console.log(typeof this.oficios);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  buscarEmpleadoDepartamento() {
    this.empleados = [];
    console.log();
    let dept = this.selectoficio.nativeElement.value;
    this._service.buscarEmpleadoOficio(dept).subscribe(
      (response) => {
        this.empleados = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  constructor(private _service: EmpleadoService) {
    this.oficios = [];
    this.empleados = [];
    this.selectoficio = ElementRef.prototype; //inicializacion del elementRef
  }

  ngOnInit(): void {
    this.buscarOficio();
  }
}
