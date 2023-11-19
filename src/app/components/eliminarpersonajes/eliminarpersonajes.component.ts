// personaje.component.ts
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceSeries } from 'src/app/services/service.serie';
import { Personaje } from 'src/app/models/personaje';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-personaje',
  templateUrl: './eliminarpersonajes.component.html',
  styleUrls: ['./eliminarpersonajes.component.css'],
})
export class EliminarPersonajesComponent implements OnInit {

  @ViewChild('cajaId') cajaIdRef!: ElementRef;

  public personajes!: Array<Personaje>;
  public mensaje = '';

  constructor(
    private serviceSeries: ServiceSeries,
    private _router: Router
    ) {}

  ngOnInit(): void {
    this.loadPersonajes();
  }

  crearPersonaje(): void {

    var idPersonaje = parseInt(this.cajaIdRef.nativeElement.value);

    this.serviceSeries.deletePersonaje(idPersonaje).subscribe(
      (result) => {
        console.log(result);
        // Redirige utilizando la navegación del router
        this._router.navigate(['/']);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  loadPersonajes(): void {
    this.serviceSeries.getPersonajes().subscribe(
      (response: any) => {
        this.personajes = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}