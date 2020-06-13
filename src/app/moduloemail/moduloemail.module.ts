//Importar modulos necesarios para crear modulos
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

//importar componentes
import { GuardaremailComponent } from './components/guardaremail/guardaremail.component';
import { MostraremailComponent } from './components/mostraremail/mostraremail.component';
import { MainemailComponent } from './components/mainemail/mainemail.component';
import { FormsModule } from '@angular/forms';



//Decorar ngModule para cargar los componentes y la configuración del módulo
@NgModule({
  //array de imports: cargar los modulos de los cuales depende el modulo
  imports: [CommonModule, FormsModule],
  //declarations: dar de alta todos los componentes del modulo
  declarations: [
    GuardaremailComponent,
    MostraremailComponent,
    MainemailComponent
  ],
  //exportar el componente principal
  exports: [MainemailComponent]

})
//exportar el modulo
export class ModuloEmailModule {

}
