import {
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Generos } from 'src/app/models/genero';
import { PeliculasService } from './../../services/peliculas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [PeliculasService],
})
export class NavbarComponent implements OnInit {
  public generos: Array<Generos>;
  @ViewChild('cajatitulo') cajatitulo: ElementRef;

  busqueda() {
    let titulo = this.cajatitulo.nativeElement.value;
    console.log(titulo);
    this._route.navigate(['/busqueda', titulo]);
    return this.busqueda;
  }

  constructor(private _service: PeliculasService, private _route: Router) {
    this.cajatitulo = ElementRef.prototype;
  }

  ngOnInit(): void {
    this._service.getGeneros().subscribe((response) => {
      this.generos = response;
    });
  }
}
