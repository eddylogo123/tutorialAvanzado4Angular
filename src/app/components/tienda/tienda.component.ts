import { Component, OnInit } from '@angular/core';

//incluir el simbolo $ de jquery
declare var jQuery:any;
declare var $:any;

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

    $('#textojq').hide();

    $('#botonjq').click(function(){
      console.log('click desde jquery');
      $('#textojq').slideToggle();
      });
    $("#caja").dotdotdot();
  }

  mostrarNombre() {
    console.log(this.nombreDelParque);
  }

  verDatosParque(event){
    console.log(event);
    this.miParque = event;
  }

}
