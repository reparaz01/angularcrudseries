import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceSeries } from 'src/app/services/service.serie';
import { Personaje } from 'src/app/models/personaje';
import { Serie } from 'src/app/models/serie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificarpersonajes',
  templateUrl: './modificarpersonajes.component.html',
  styleUrls: ['./modificarpersonajes.component.css']
})
export class ModificarPersonajesComponent {

  @ViewChild('cajaPersonaje') cajaPersonajeRef!: ElementRef;
  @ViewChild('cajaSerie') cajaSerieRef!: ElementRef;
  
  public series!: Array<Serie>;
  public personajes!: Array<Personaje>;

  constructor(
    private serviceSeries: ServiceSeries,
    private _router: Router
    ) {}

    ngOnInit(): void {
      this.loadSeries();
      this.loadPersonajes();
    }



    modificarPersonajes(): void {
      var idPersonaje = parseInt(this.cajaPersonajeRef.nativeElement.value);
      var idSerie = parseInt(this.cajaSerieRef.nativeElement.value);

      this.serviceSeries.updatePersonaje(idPersonaje,idSerie).subscribe(
        (result) => {
          console.log(result);
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
