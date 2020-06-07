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

  public titulo: string = 'Componente Tienda';
  constructor() { }

  ngOnInit(): void {
  }

}
