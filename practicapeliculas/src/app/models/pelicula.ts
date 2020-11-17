export class Pelicula {
  constructor(
    public idPelicula: number,
    public idDistribuidor: number,
    public idGenero: number,
    public titulo: string,
    public idNacionalidad: string,
    public argumento: string,
    public foto: string,
    public fechaEsterno: string,
    public actores: string,
    public director: string,
    public duracion: number,
    public precio: number,
    public youtube: string,
    public enlaceVideo: string
  ) {}
}
