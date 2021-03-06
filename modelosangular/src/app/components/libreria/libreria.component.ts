import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css'],
})
export class LibreriaComponent implements OnInit {
  public comics: Array<Comic>;
  public favorito: Comic;

  seleccionarFavorito(event) {
    let id = parseInt(event);
    this.favorito = this.comics[id];
    console.log(this.favorito);
  }

  eliminarComic(event) {
    let indice = parseInt(event);
    this.comics.splice(indice, 1);
  }

  constructor() {
    this.comics = [
      new Comic(
        'Spiderman',
        'https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg',
        'Hombre araña'
      ),
      new Comic(
        'Wolverine',
        'https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg',
        'Lobezno'
      ),
      new Comic(
        'Guardianes de la Galaxia',
        'https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg',
        'Yo soy Groot'
      ),
    ];
  }

  ngOnInit(): void {}
}
