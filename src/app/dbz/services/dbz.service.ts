import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService{

    //properties
    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
      ];

    //getters y setters
    get personajes(): Personaje[]{
        return [...this._personajes];
    }


    constructor(){
    }

    //methods
    agregarPersonaje( personaje: Personaje ): void {
        this._personajes.push(personaje);
    }
}