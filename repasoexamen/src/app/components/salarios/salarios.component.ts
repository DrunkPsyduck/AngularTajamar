import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Plantilla } from 'src/app/models/plantilla';
import { PlantillaService } from 'src/app/services/plantilla.service';

@Component({
  selector: 'app-salarios',
  templateUrl: './salarios.component.html',
  styleUrls: ['./salarios.component.css'],
})
export class SalariosComponent implements OnInit {
  public funciones: Array<string>;
  public oficios: Array<Plantilla>;
  @ViewChild('cajasalario') cajasalario: ElementRef;
  @ViewChild('cajadepartamento') cajadepartamento: ElementRef;

  constructor(
    private _service: PlantillaService,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ) {
    this.oficios = [];
  }

  cargarFunciones() {
    this._service.getFunciones().subscribe((response) => {
      this.funciones = response;
    });
  }

  getFunciones(oficio) {
    this._service.getOficios(oficio).subscribe((response) => {
      this.oficios = response;
    });
  }

  updateSalario() {
    let salario = parseInt(this.cajasalario.nativeElement.value);
    let oficio = this.cajadepartamento.nativeElement.value;

    console.log(salario + ' ' + oficio);
    this._service.updateSalario(oficio, salario).subscribe((response) => {
      this.getFunciones(oficio);
    });
  }
  ngOnInit(): void {
    this.cargarFunciones();
  }
}
