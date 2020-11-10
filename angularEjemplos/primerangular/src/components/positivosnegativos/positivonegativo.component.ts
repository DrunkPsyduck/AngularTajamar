import{Component} from "@angular/core";

@Component({
    selector: "app-positivo-negativo",
    templateUrl: "./positivonegativo.component.html",
    styleUrls: ["./positivonegativo.component.css"],
})

export class PositivoNegativo {
    public numeros: Array<number>;
    constructor(){
        this.numeros = [0,4,7];
    }

    generarNumeros(){
        let aleat = Math.floor(Math.random()*10)+1;
        this.numeros.push(aleat)
    }
}