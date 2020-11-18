import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css'],
})
export class ModificarComponent implements OnInit {
  public departamento: Departamento;
  @ViewChild('cajanumero') cajanumero: ElementRef;
  @ViewChild('cajanombre') cajanombre: ElementRef;
  @ViewChild('cajalocalidad') cajalocalidad: ElementRef;

  constructor(
    private _service: DepartamentoService,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ) {}

  buscarDepartamento(iddept) {
    this._service.buscarDepartamento(iddept).subscribe((response) => {
      this.departamento = response;
    });
  }

  updateDepartamento() {
    let num = parseInt(this.cajanumero.nativeElement.value);
    let nom = this.cajanombre.nativeElement.value;
    let loc = this.cajalocalidad.nativeElement.value;

    let dept = new Departamento(num, nom, loc);
    this._service.updateDepartamento(dept).subscribe(
      (response) => {
        this._router.navigate(['/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.buscarDepartamento(params.iddepartamento);
    });
  }
}
