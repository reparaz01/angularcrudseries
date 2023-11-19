// login.component.ts
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceSeries } from 'src/app/services/service.serie';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent {

  @ViewChild('cajaUsername') cajaUsernameRef!: ElementRef;
  @ViewChild('cajaPassword') cajaPasswordRef!: ElementRef;

  public mensaje = '';
  public loginCorrecto: boolean = false;
  public loginIncorrecto: boolean = false;

  constructor(
    private serviceSeries: ServiceSeries,

    ) {}

  login(): void {

    var username = this.cajaUsernameRef.nativeElement.value;
    var password = this.cajaPasswordRef.nativeElement.value;

    this.serviceSeries.autorizarAcceso(username,password).subscribe(
      (data) => {

        environment.token = data.response;
        this.loginCorrecto = true;
        this.loginIncorrecto = false;
        console.log("Usuario:", username);
        console.log("Password:", password);
        console.log("TOKEN: " + environment.token);

      },
      (error) => {
        console.error(error);
        this.loginCorrecto = false;
        this.loginIncorrecto = true;
        console.log("Usuario:", username);
        console.log("Password:", password);
        console.log("TOKEN: " + environment.token);
      }
    );
  }


}