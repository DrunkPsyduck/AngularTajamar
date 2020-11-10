import {Component} from "@angular/core";
@Component({
    selector: "app-numeros-random",
    templateUrl: "./numerosrandom.component.html",
    styleUrls: ["./numerosrandom.component.html"]
})

export class NumerosAleatoreos {
    public numeros: Array<number>;
    constructor(){
        this.numeros = [0,4,7];
    }

    generarNumeros(){
        let aleat = Math.floor(Math.random()*10)+1;
        this.numeros.push(aleat)
    }
}