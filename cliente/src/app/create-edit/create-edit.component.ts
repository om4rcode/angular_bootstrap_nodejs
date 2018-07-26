import { Component, OnInit }      from '@angular/core';
import { AppService }             from './../app.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css'],
  providers: [AppService]
})
export class CreateEditComponent implements OnInit {
  nombre     :string = null;
  ape_paterno:string = null;
  ape_materno:string = null;
  edad       :string = null;
  correo     :string = null;
  id_persona :number = null;
  constructor(
    private _appService: AppService,
    private _router    : Router,
    private route      : ActivatedRoute
  ) { 
  }

  ngOnInit() {
    // Recogemos los parametros de la URL
    this.route.params.subscribe(params => {
      if(params.id) {
        this.id_persona = <number>params['id'];
        this.setearCamposByPersona(this.id_persona);
      }
    });
  }

  registrarPersona() {
    let data = {
      nombre      : this.nombre,
      ape_paterno : this.ape_paterno,
      ape_materno : this.ape_materno,
      edad        : this.edad,
      correo      : this.correo
    }
    this._appService.insertarPersona(data).subscribe(result => {
      console.log(result);
      this._router.navigate(['/home']);
    },err => {
      console.log(err);
    });
  }

  setearCamposByPersona(id) {
    this._appService.getPersona(id).subscribe(result => {
      this.nombre      = result.nom_persona;
      this.ape_paterno = result.ape_paterno;
      this.ape_materno = result.ape_materno;
      this.edad        = result.edad;
      this.correo      = result.correo;
    },err => {
      console.log(err);
    });
  }

  editarPersona() {
    let data = {
      nombre     : this.nombre,
      ape_paterno: this.ape_paterno,
      ape_materno: this.ape_materno,
      edad       : this.edad,
      correo     : this.correo,
      id_persona : this.id_persona
    }
    this._appService.editarPersona(data).subscribe(result => {
      console.log(result);
      this._router.navigate(['/home']);
    }, err => {
      console.log(err);
    });
  }
}
