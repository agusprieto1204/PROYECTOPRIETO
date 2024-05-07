import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ClientesService } from '../app/services/cliente.service'; // Importa el servicio aquí

@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ClientesService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
