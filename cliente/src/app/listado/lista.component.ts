import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';


@Component({
    selector: 'listar-usuario',
    templateUrl: './../listado/lista.component.html',
    styleUrls: ['./../listado/lista.component.css'],
})

export class ListaComponent implements OnChanges {

    @Input() listadoPersonas   : any;
    @Output() editarPersona    : any =  new EventEmitter;
    @Output() eliminarPersona  : any =  new EventEmitter();

    constructor() {
        //console.log(this.listadoPersonas);
    }

    ngOnChanges() {
        //console.log(this.listadoPersonas);
    }

    
    // Mandamos la data a editar con su respectivo indice.
    editar(index: number) {
        let personaEdit = this.listadoPersonas[index];
        this.editarPersona.emit({data : personaEdit, indice: index});
    }
    //--------------------------------------------------//


    eliminar(index:number, id_persona:number) {
        //let personaDelete = this.listadoPersonas[index];
        //this.eliminarPersona.emit(personaDelete);
    
        this.eliminarPersona.emit({index, id_persona});
    }
}