import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Serie } from 'src/app/models/serie';
import { ServiceSeries } from 'src/app/services/service.serie';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
})
export class SerieComponent implements OnInit {
  public serie: Serie | null = null;
  public serieCargada = false;
  private previousRoute: string | null = null;

  constructor(
    private _serviceSeries: ServiceSeries,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadSerie();
  }

  loadSerie(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      var id = parseInt(parametros['idSerie']);
      this._serviceSeries.detallesSerie(id.toString()).subscribe((response) => {
        this.serie = response;
        this.serieCargada = true;
      });
    });
    
  }

  ngDoCheck(): void {
    const currentRoute = this._activeRoute.snapshot.url.join('/');

    if (currentRoute !== this.previousRoute) {
      this.previousRoute = currentRoute;
      this.serieCargada = false; // Reinicia la carga
      this.loadSerie(); // Carga la nueva serie
    }
  }
}
