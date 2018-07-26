import { Component, Input, Output, OnChanges, EventEmitter, OnInit } from '@angular/core'
	
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppService } from './../app.service';

@Component({
  selector: 'crear-editar-usuario',
  templateUrl: './../editar/editar.component.html',
  styleUrls: ['./../editar/editar.component.css'],
  providers: [AppService],
})

export class EditarComponent implements OnInit, OnChanges {

  @Input()  DatosPaEditar  : any;
  @Output() DatosEditados  : any = new EventEmitter();
  @Output() Salir          : any = new EventEmitter();

  get nombre      () { return this.formulario.controls['_nombre'];};
  get ape_paterno () { return this.formulario.controls['_ape_paterno'];};
  get ape_materno () { return this.formulario.controls['_ape_materno'];};
  get edad        () { return this.formulario.controls['_edad'];};
  get correo      () { return this.formulario.controls['_correo'];};

  public formulario : FormGroup;

  constructor(private formBuilder : FormBuilder ) {
    this.formulario = this.formBuilder.group({
        _nombre : [
           null,          
           [Validators.required, Validators.minLength(6)]
        ],
        _ape_paterno : [
          null,
          [Validators.required, Validators.minLength(6)]
        ],
        _ape_materno : [
          null,
          [Validators.required, Validators.minLength(6)]
        ],
        _edad : [
          null,
          [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.maxLength(2)]
        ],
        _correo : [
          null,
          [Validators.required, Validators.email]
        ]
    })
  }

  ngOnInit() {

  }



  ngOnChanges() {
    if (this.DatosPaEditar) {
      //console.log(this.DatosPaEditar.data.id_persona);
      this.nombre.setValue(this.DatosPaEditar.data.nom_persona);
      this.ape_paterno.setValue(this.DatosPaEditar.data.ape_paterno)
      this.ape_materno.setValue(this.DatosPaEditar.data.ape_materno)
      this.edad.setValue(this.DatosPaEditar.data.edad)
      this.correo.setValue(this.DatosPaEditar.data.correo)
    }
    else {
      this.nombre.setValue(null)
      this.ape_paterno.setValue(null)
      this.ape_materno.setValue(null)
      this.edad.setValue(null)
      this.correo.setValue(null)
    }
  }

  back() {
      let estado_tabla = {
        listar        : true,
        create_update : false,
        eliminar      : false
      }
      this.Salir.emit(estado_tabla)
  }

  crearPersona() {
    let dataCreada = {
      "nom_persona": this.nombre.value,
      "ape_paterno": this.ape_paterno.value,
      "ape_materno": this.ape_materno.value,
      "edad"       : this.edad.value,
      "correo"     : this.correo.value,
    }
    this.DatosEditados.emit(dataCreada);
    this.DatosEditados = null
  }

  editarPersona() {
    let dataEditada = {
      "id_persona" : this.DatosPaEditar.data.id_persona,
      "nom_persona": this.nombre.value,
      "ape_paterno": this.ape_paterno.value,
      "ape_materno": this.ape_materno.value,
      "edad"       : this.edad.value,
      "correo"     : this.correo.value,
      "indice"     : this.DatosPaEditar.indice
    }
    //console.log(this.DatosEditados);
    this.DatosEditados.emit(dataEditada);
    this.DatosEditados = null
  }

  _keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
}

} 