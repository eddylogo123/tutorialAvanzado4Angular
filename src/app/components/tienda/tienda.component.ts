import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})

/***
 * la palabra class define la clase en si
 *
 */
export class TiendaComponent implements OnInit {

  public titulo;
  public nombreDelParque: string;
  public miParque;

  constructor() {
    this.titulo = 'Componente Tienda';
  }

  ngOnInit(): void {
  }

  mostrarNombre() {
    console.log(this.nombreDelParque);
  }

  verDatosParque(event){
    console.log(event);
    this.miParque = event;
  }

}
