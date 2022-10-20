import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core'; //inyectamos servicio http
import {  Observable  } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';
 

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  //la base del URL
  private apiUrl: string = 'https://restcountries.com/v3.1'; //base del url que llamamos
  private apiUrlRegion: string = 'https://restcountries.com/v2';

  get httpParams (){
    return new HttpParams()
    .set('fields','name,capital,cca2,flags,population'); //modificar URL
  }

  constructor(private http:HttpClient) { } //inyectamos servicio http

  //ahora podemos crear metodos relacionados con las peticiones HTTP
  buscarPais(termino:string):Observable<Country[]>{ //el observable es una persona
    //que avisa si llega informacion ono 

    //construimos la URL
    const url=`${this.apiUrl}/name/${ termino }`; 

    return this.http.get<Country[]>(url,{params: this.httpParams});
  }

  buscarCapital(termino:string):Observable <Country[]>{
    const url=`${this.apiUrl}/capital/${ termino }`; 

    return this.http.get<Country[]>(url,{params:this.httpParams});
  }

  buscarPaisID(id:string):Observable <Country>{
    const url=`${this.apiUrl}/alpha/${ id }`; 

    return this.http.get<Country>(url);
  }

  buscarRegion(termino : string): Observable<Country[]> {
  
    const url = `${this.apiUrlRegion}/regionalbloc/${termino }`; 
    return this.http.get<Country[]>(url,{params:this.httpParams})
    .pipe(
      tap(console.log)
    )
  }
}
