// login.component.ts
import { Component } from '@angular/core';
import { ServiceSeries } from 'src/app/services/service.serie';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent {
  public usuario: string = '';
  public password: string = '';
  public loginCorrecto: boolean = false;
  public loginIncorrecto: boolean = false;

  constructor(private _serviceSeries: ServiceSeries) {}

  login(): void {
    this._serviceSeries.autorizarAcceso(this.usuario, this.password)
      .subscribe(
        () => {
          console.log("Usuario:", this.usuario);
          console.log("Password:", this.password);
          console.log("TOKEN: " + environment.token);

          this.loginCorrecto = true;
          this.loginIncorrecto = false;
        },
        (error) => {
          console.error("Error al autorizar acceso:", error);
          console.log("Usuario:", this.usuario);
          console.log("Password:", this.password);
          console.log("TOKEN: " + environment.token);
          this.loginCorrecto = false;
          this.loginIncorrecto = true;
        }
      );
  }
}
