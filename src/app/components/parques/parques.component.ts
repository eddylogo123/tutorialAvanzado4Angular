//importar modulos
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnInit {

    //recibir desde un componente padre
    @Input() nombre: string;

    //recibir desde un componente padre, considerándose un alias
    @Input('metros_cuadrados') metros: number;

    public vegetacion: string;
    public abierto: boolean;

    //informacion para sacar datos hacia el padre
    @Output() pasameLosDatos = new EventEmitter();

  constructor() {
    this.nombre = 'Parque natural para caballos';
    this.metros = 450;
    this.vegetacion = 'Alta';
    this.abierto = true;
  }

  ngOnInit(): void {
  }

  emitirEvento(event){
  this.pasameLosDatos.emit({
    'nombre': this.nombre,
    'metros': this.metros,
    'vegetacion': this.vegetacion,
    'abierto': this.abierto
  });
  }

}
