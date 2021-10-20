import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from '../services/indicadores.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.sass']
})
export class PreciosComponent implements OnInit {

  public precios: any;
  public url_actual: any;
  public nombre: any;

  constructor(

    private _indicadoresService:IndicadoresService,
    private _router: Router,
    private _route: ActivatedRoute

  ) { }

  ngOnInit(): void {

    var url = location.pathname;
    var ret = url.replace('/precios/','');
    console.log(ret);

      
    this.getProject(ret);


  }

  getProject(clave){
    this._indicadoresService.getPrecios(clave).subscribe(
      response => {
        this.precios = Object.values(response.serie);
        console.log(this.precios);
        this.nombre = Object.values(response);
        console.log(this.nombre);
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
