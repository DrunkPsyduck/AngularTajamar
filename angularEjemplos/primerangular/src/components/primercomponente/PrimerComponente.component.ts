import {Component} from '@angular/core';

//Declaracion del componente y su estructura de archivos
@Component({
    //Nombre del componente para la app
    selector: "app-primercomponente",
    // plantilla para el componente
    template: `<h1>Soy el primer componente Angular </h1>
    <h2>{{nombre}}</h2><h2>{{anyo}}</h2>`
})

//Nombre par ala declaración en MODULE
export class PrimerComponente{
    //declarar variables con tipo
    public nombre: string;
    public anyo: number;
    //La primera vez que entra en el componente tenemos un constructor
    constructor(){
    console.log("creando el primer componente");
    //con this accedemos a las propiedades
    this.nombre = "S*ck my d*ck";
    this.anyo = 2020;
    }
}