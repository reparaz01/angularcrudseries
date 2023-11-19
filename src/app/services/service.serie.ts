import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Personaje } from '../models/personaje';
import { Serie } from '../models/serie';

@Injectable({
  providedIn: 'root',
})
export class ServiceSeries {
  constructor(private _http: HttpClient) {}

  autorizarAcceso(username: string, password: string): Observable<any> {
    const json = {
      userName: username,
      password: password
    };

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const request = 'auth/login';
    const url = environment.urlApi + request;

    return this._http.post(url, json, { headers: headers });
  }

  getEmpleados(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'bearer ' + environment.token);
    const request = 'api/empleados';
    const url = environment.urlApi + request;
    return this._http.get(url, { headers: headers });
  }

  getSeries(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'bearer ' + environment.token);
    const request = 'api/Series';
    const url = environment.urlApi + request;

    return this._http.get(url, { headers });
  }

  getPersonajesSerie(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'bearer ' + environment.token);
    var request = '/api/Series/PersonajesSerie/' + id;
    var url = environment.urlApi + request

    return this._http.get(url, { headers: headers });
  }

  getPersonajes(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'bearer ' + environment.token);
    const request = 'api/Personajes';
    const url = environment.urlApi + request;

    return this._http.get(url, { headers });
  }


  crearPersonaje(personaje: Personaje): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'bearer ' + environment.token);
    const request = 'api/personajes';
    const url = environment.urlApi + request;
    console.log(personaje);
    return this._http.post(url, personaje, { headers });
  }

  detallesSerie(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'bearer ' + environment.token);
    const request = "api/Series/" + id;
    const url = environment.urlApi + request;

    return this._http.get(url, { headers });
  }

  updatePersonaje(idPersonaje: number, idSerie: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'bearer ' + environment.token);
    const request = "api/personajes/" +idPersonaje + "/" +idSerie;
    const url = environment.urlApi + request;

    return this._http.put(url, {}, { headers });
  }

  deletePersonaje(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'bearer ' + environment.token);
    const request = `api/personajes/${id}`;
    const url = environment.urlApi + request;

    return this._http.delete(url, { headers });
  }
}
