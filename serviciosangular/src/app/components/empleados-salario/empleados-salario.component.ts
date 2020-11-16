import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from './../../models/empleado';

@Component({
  selector: 'app-empleados-salario',
  templateUrl: './empleados-salario.component.html',
  styleUrls: ['./empleados-salario.component.css'],
  providers: [EmpleadoService],
})
export class EmpleadosSalarioComponent implements OnInit {
  public empleados: Array<Empleado>;
  @ViewChild('cajasalario') cajasalario: ElementRef;

  buscarEmpleados() {
    let salario = this.cajasalario.nativeElement.value;
    this._service.buscarEmpleadosSalario(salario).subscribe(
      (response) => {
        this.empleados = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  constructor(private _service: EmpleadoService) {
    this.empleados = [];
  }

  ngOnInit(): void {}
}
