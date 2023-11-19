import { HomeComponent } from "./components/home/home.component";
import { SerieComponent } from "./components/serie/serie.component";
import { LoginComponent } from "./components/login/login.component";
import { PersonajesComponent } from "./components/personajes/personajes.component";
import { CrearPersonajesComponent } from './components/crearpersonajes/crearpersonajes.component';
import { EliminarPersonajesComponent } from './components/eliminarpersonajes/eliminarpersonajes.component';
import { ModificarPersonajesComponent } from "./components/modificarpersonajes/modificarpersonajes.component";

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "serie/:idSerie", component: SerieComponent },
  { path: "personajes/:idSerie/:nombre", component: PersonajesComponent },
  { path: "crearpersonajes", component: CrearPersonajesComponent },
  { path: "eliminarpersonajes", component: EliminarPersonajesComponent },
  { path: "modificarpersonajes", component: ModificarPersonajesComponent },
  { path: "login", component: LoginComponent },

]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);