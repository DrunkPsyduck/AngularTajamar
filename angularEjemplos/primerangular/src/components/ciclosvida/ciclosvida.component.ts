import {Component, DoCheck, OnInit} from "@angular/core";

@Component({
    selector: "app-ciclos-vida",
    templateUrl: "./ciclosvida.component.html"
})

export class CiclosVida implements OnInit, DoCheck{
    constructor(){
        console.log("Voy primero")
    }

    ngOnInit(): void {
        console.log("Ejecutando OnInit()")
    }

    ngDoCheck(){
        console.log("DoCheck() inside")
    }
}