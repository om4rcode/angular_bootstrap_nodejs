import { Component, Input, Output,OnInit, OnChanges, EventEmitter } from '@angular/core'

@Component({
    selector    : 'eliminar-usuario',
    templateUrl : './../eliminar/eliminar.component.html',
    styleUrls   : ['./../eliminar/eliminar.component.css'],
})

export class EliminarComponent implements OnInit, OnChanges {

    @Input() indexEliminar : number;
    @Output() estado       : any = new EventEmitter;
    mensaje                : string 
    @Input() mensajeP      : string;

    constructor() {
        
    }   

    ngOnInit() {

    }

    eliminarDato() {
        
        this.estado.emit({estado : true});

    }

    ngOnChanges() {
        this.mensaje = this.mensajeP;
    }
}