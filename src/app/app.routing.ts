import { HomeComponent } from "./components/home/home.component";
import { SerieComponent } from "./components/serie/serie.component";
import { LoginComponent } from "./components/login/login.component";
import { PersonajesComponent } from "./components/personajes/personajes.component";

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "serie/:idSerie", component: SerieComponent },
  { path: "personajes/:idSerie/:nombre", component: PersonajesComponent },
  { path: "login", component: LoginComponent },

]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);