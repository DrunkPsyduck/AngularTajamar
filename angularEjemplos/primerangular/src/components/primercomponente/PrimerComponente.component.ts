import {Component} from '@angular/core';

//Declaracion del componente y su estructura de archivos
@Component({
    //Nombre del componente para la app
    selector: "app-primercomponente",
    // plantilla para el componente
    template: `<h1>Soy el primer componente Angular </h1>`
})

//Nombre par ala declaración en MODULE
export class PrimerComponente{
    //La primera vez que entra en el componente tenemos un constructor
    constructor(){
    console.log("creando el primer componente");
    }
}