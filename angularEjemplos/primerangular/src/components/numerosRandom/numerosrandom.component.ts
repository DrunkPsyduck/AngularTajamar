import {Component} from "@angular/core";
@Component({
    selector: "app-numeros-random",
    templateUrl: "./numerosrandom.component.html",
    styleUrls: ["./numerosrandom.component.html"]
})

export class NumerosRandom {
    public numeros: Array<number>;
    consructor(){
        this.numeros = [14,86,45];
    }

    generarNumeros () {
        let rnd = Math.floor(Math.random()*100)+1;
        this.numeros.push(rnd)
    }
    
}