import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'frontkeycloak';

  constructor( private keyc: KeycloakService){

  }
  
  logout(){
    this.keyc.logout()
  }
}
