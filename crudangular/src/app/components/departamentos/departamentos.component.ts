import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css'],
})
export class DepartamentosComponent implements OnInit {
  public departamentos: Array<Departamento>;
  constructor(
    private _service: DepartamentoService,
    private _activedRoute: ActivatedRoute
  ) {}

  cargarDepartamentos() {
    this._service.getDepartamentos().subscribe((response) => {
      this.departamentos = response;
    });
  }

  eliminarDepartamento(id) {
    this._service.eliminarDepartamento(id).subscribe((response) => {
      this.cargarDepartamentos();
    });
  }
  ngOnInit(): void {
    //Recibimos un parametro o no
    this._activedRoute.params.subscribe((params: Params) => {
      if (params.iddepartamento != null) {
        this.eliminarDepartamento(params.iddepartamento);
      } else {
        this.cargarDepartamentos();
      }
    });
  }
}
