import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {
  public url: string;
  public url2 : string;

  constructor(
    public _http:HttpClient
  ) { 
    this.url = 'https://mindicador.cl/api';
  }

  getIndicators():Observable<any>{
    return this._http.get(this.url);
  }

  getPrecios(nombre:string):Observable<any>{
    return this._http.get(this.url+ '/' +nombre);
  }
 
}
