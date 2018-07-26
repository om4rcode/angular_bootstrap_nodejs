import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AppService],
})
export class HomeComponent implements OnInit {

  eliminar      : boolean = false;
  listar        : boolean = true;
  create_update : boolean = false
  getmensaje    : string;
  datos         : any;
  personas      : any; 
  indice        : number;
  mensaje = 'hola';

  constructor(private _appService: AppService) {
    this.getPersonas();
  }

  ngOnInit() {

  }

  crearUsuario() {
    this.create_update = true;
    this.listar = false;
    this.datos = null;
  }

  deletePersona(event) {
    //console.log(event);
      this.indice = event.id_persona;
      this.listar = false;
      this.create_update = false;
      this.eliminar = true;      
  }

  proceder(event) {
    if(event.estado) {
      this.listar = true;
      this.create_update = false;
      this.eliminar = false;
      this._appService.eliminarPersona(this.indice).subscribe(result=> {
        this.personas.splice(this.indice, 1);
        this.getmensaje = result.msj
      }, err => {
          console.log(err);
      })
      

      console.log(event);
    } else {

    }
  }

  back(event) {
    this.listar = event.listar;
    this.create_update = event.create_update;
    this.eliminar = event.eliminar;
  }

  dataEditada(event) {
    if (event.id_persona) {
      console.log(event.nom_persona);
      this._appService.editarPersona(event).subscribe(result => { 
        //this.getPersonas() 
        this.personas[event.indice] = event;
        this.mensaje = result.msj
        this.create_update = false;
        this.listar = true;
      }, err => {
        this.mensaje = err.error.msj ? err.error.msj : 'Contenid no disponible1'
        console.log(err);
      });
    } 
    else {
      this._appService.insertarPersona(event).subscribe(result => {
    
        event.id_persona = result.id_persona
        this.personas.unshift(event)
        //this.getPersonas()
        this.mensaje = result.msj
        this.create_update = false;
        this.listar = true;
      }, err => {
        this.mensaje = err.error.msj ? err.error.msj : 'Contenid no disponible'
        console.log(err);
      });
    }
  }


  //----------Datos de la persona a editar.-----//
  getPersonaEdit(event) {

    this.listar = false;
    this.datos = event;
    console.log(this.datos)
    this.create_update = true;
    //data
    
    //datos = {personaEdit, index}
  }
  //-------------------------------------------//

  // se ejecuta al inicio para cargar la tabla.
  getPersonas() {
    this._appService.getPersonas().subscribe(result => {
      this.personas = result;
      console.log(result);
    }, err => {
      console.log(err);
    })
  }
  //--------------------------------------//

  eliminarPersona(id, index) {
    this._appService.eliminarPersona(id).subscribe(result => {
      console.log(result);
      this.personas.splice(index, 1);
    }, err => {
      console.log(err);
    })
  }

}
