//importar modulos
import { Component, Input, Output, OnInit, EventEmitter, OnChanges, DoCheck, SimpleChanges, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

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

  ngOnDestroy(): void {
        // throw new Error("Method not implemented.");
        console.log('Se va eliminar el componente....');
    }

  ngDoCheck(): void {
      console.log('El docheck se ha ejecutado');
    }

  /***
   * Metodo que detecta algun cambio en la clase
   *
   */
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    console.log("Existen cambios en las propiedades");
    }

  ngOnInit(): void {
    console.log('metodo on init cargado');
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
