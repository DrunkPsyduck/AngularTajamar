import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comic } from './../../models/comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css'],
})
export class ComicComponent implements OnInit {
  @Input() comic: Comic;
  @Input() indice: number;
  @Output() seleccionarFavorito = new EventEmitter();
  @Output() eliminarComic = new EventEmitter();

  marcarFavorito() {
    console.log('Sel');
    this.seleccionarFavorito.emit(this.indice);
  }

  deleteComic() {
    this.eliminarComic.emit(this.indice);
  }

  constructor() {}
  ngOnInit(): void {}
}
