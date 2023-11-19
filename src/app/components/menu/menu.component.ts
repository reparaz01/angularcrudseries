import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie';
import { ServiceSeries } from 'src/app/services/service.serie';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public series!: Array<Serie>;

  constructor(private _serviceSeries: ServiceSeries) {}

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries(): void {
    this._serviceSeries.getSeries().subscribe(
      (result: Array<Serie>) => {
        this.series = result;
      },
      (error) => {
        console.error('Error al obtener series:', error);
      }
    );
  }
}
