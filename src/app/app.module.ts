import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

import { ServiceSeries } from './services/service.serie';
import { SerieComponent } from './components/serie/serie.component';
import { LoginComponent } from './components/login/login.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { CrearPersonajesComponent } from './components/crearpersonajes/crearpersonajes.component';
import { EliminarPersonajesComponent } from './components/eliminarpersonajes/eliminarpersonajes.component';
import { ModificarPersonajesComponent } from './components/modificarpersonajes/modificarpersonajes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SerieComponent,
    LoginComponent,
    PersonajesComponent,
    CrearPersonajesComponent,
    EliminarPersonajesComponent,
    ModificarPersonajesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [appRoutingProviders, ServiceSeries],
  bootstrap: [AppComponent]
})
export class AppModule { }
