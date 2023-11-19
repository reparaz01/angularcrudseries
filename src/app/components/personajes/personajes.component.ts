import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceSeries } from 'src/app/services/service.serie';
import { Personaje } from 'src/app/models/personaje';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit {
  public personajes!: Array<Personaje>;
  public personajesCargados = false;

  constructor(
    public _serviceSeries: ServiceSeries,
    public _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadPersonajes();
  }

  loadPersonajes(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      var id = parseInt(parametros['idSerie']);
      this._serviceSeries.getPersonajesSerie(id.toString()).subscribe((response) => {
        this.personajes = response;
        this.personajesCargados = true;
      });
    });

  }


}
