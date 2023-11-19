// personaje.component.ts
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceSeries } from 'src/app/services/service.serie';
import { Personaje } from 'src/app/models/personaje';
import { Serie } from 'src/app/models/serie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-personaje',
  templateUrl: './crearpersonajes.component.html',
  styleUrls: ['./crearpersonajes.component.css'],
})
export class CrearPersonajesComponent implements OnInit {

  @ViewChild('cajaId') cajaIdRef!: ElementRef;
  @ViewChild('cajaNombre') cajaNombreRef!: ElementRef;
  @ViewChild('cajaImagen') cajaImagenRef!: ElementRef;
  @ViewChild('cajaSerie') cajaSerieRef!: ElementRef;
  
  public series!: Array<Serie>;
  public mensaje = '';

  constructor(
    private serviceSeries: ServiceSeries,
    private _router: Router
    ) {}

  ngOnInit(): void {
    this.loadSeries();
  }

  crearPersonaje(): void {

    var idPersonaje = 0;
    var nom = this.cajaNombreRef.nativeElement.value;
    var img = this.cajaImagenRef.nativeElement.value;
    var idSerie = parseInt(this.cajaSerieRef.nativeElement.value);
    
    var personaje: Personaje = {
      idPersonaje: idPersonaje,
      nombre: nom,
      imagen: img,
      idSerie: idSerie
    };

    console.log(personaje);

    this.serviceSeries.crearPersonaje(personaje).subscribe(
      (result) => {
        console.log(result);
        console.log(personaje);
        // Redirige utilizando la navegación del router
        this._router.navigate(['/']);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  loadSeries(): void {
    this.serviceSeries.getSeries().subscribe(
      (response: any) => {
        this.series = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}