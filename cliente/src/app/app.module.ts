import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateEditComponent } from './create-edit/create-edit.component';
import { EditarComponent } from './editar/editar.component';
import { ListaComponent } from './listado/lista.component';
import { EliminarComponent } from './eliminar/eliminar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateEditComponent,
    EditarComponent,
    ListaComponent,
    EliminarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
