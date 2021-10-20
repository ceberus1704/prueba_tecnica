import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from '../services/indicadores.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.sass']
})
export class DetalleComponent implements OnInit {

  public detalle: any;
  public url_actual: any;
  public nombre: any;

  constructor(

    private _indicadoresService:IndicadoresService,
    private _router: Router,
    private _route: ActivatedRoute

  ) { }

  ngOnInit(): void {

    var url = location.pathname;
    var ret = url.replace('/detalle/','');
    console.log(ret);

    this.getProject(ret);

  }

  getProject(clave){
    this._indicadoresService.getPrecios(clave).subscribe(
      response => {
        this.detalle = response;
        console.log(this.detalle);
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
