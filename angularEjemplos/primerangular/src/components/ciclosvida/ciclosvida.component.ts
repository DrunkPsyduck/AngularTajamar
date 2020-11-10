import {Component, DoCheck, OnInit} from "@angular/core";

@Component({
    selector: "app-ciclos-vida",
    templateUrl: "./ciclosvida.component.html"
})

export class CiclosVida implements OnInit, DoCheck{
    public mensaje: string;

    //*crear método de accion
    cambiarMensaje (){
        this.mensaje = "Coward";
    }
    constructor(){
        console.log("Voy primero")
        this.mensaje= "You're a";
    }

    ngOnInit(): void {
        console.log("Ejecutando OnInit()")
    }

    ngDoCheck(){
        console.log("DoCheck() inside")
    }
}