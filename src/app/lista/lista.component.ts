import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from '../services/indicadores.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass'],
  providers: [IndicadoresService]
})
export class ListaComponent implements OnInit {

  public indicators: any;

  constructor(
    private _indicadoresService:IndicadoresService

  ) { 

    

  }

  ngOnInit(): void {
    
    this._indicadoresService.getIndicators().subscribe( 
      result => {
        this.indicators = Object.values(result);
        console.log(this.indicators);
      },
      error => {
        console.log(<any>error);
      }
    );

    
  }


  /* añadirData(data) {
    this.indicadores = [];
    this.indicadores.push(data);

    
    console.log(this.indicadores);
    console.log("HOLA");
  } */
  
  
}
