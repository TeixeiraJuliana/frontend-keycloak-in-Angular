import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, retry }  from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
    ofertas: any[] 
    private headers: HttpHeaders;
    
  constructor( private http: HttpClient) {
     this.headers = new HttpHeaders().set('Content-Type', 'application/json');
        this.ofertas = []
   }
   
    public async getAll(): Promise<any[]>{

    return this.http.get(
        environment.BASE_URL + '/ofertas/list'
    )
    .toPromise()
    .then((response: any) => response)
    }
}
