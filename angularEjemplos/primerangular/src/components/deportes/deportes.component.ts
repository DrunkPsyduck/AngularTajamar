import {Component} from "@angular/core";
@Component({
selector: "app-deportes",
templateUrl: "./deportes.component.html",
})
export class Deportes {
    public sports: Array<string>
    constructor(){
        this.sports = ["Tiro olímpico", "baloncesto", "rally", "fútbol", "cricket", "golf", "curling", "surf"];
    }
}