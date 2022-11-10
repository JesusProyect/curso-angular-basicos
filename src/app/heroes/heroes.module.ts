import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { HeroeComponent } from './heroe/heroe.componet';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
       ListadoComponent 
    ],
    imports: [
        CommonModule
    ]
})

export class HeroesModule {}