import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CounterService{

    counter:number = 0;
    usercounter: number =0;
    constructor(){}
    incrementcounter(){
        this.counter = this.counter+1;
        return this.counter
    }
    incrementUsercounter(){
        this.usercounter= this.usercounter +1;
        return this.usercounter;
    }
}
