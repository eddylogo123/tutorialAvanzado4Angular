import { Component } from '@angular/core';

@Component({
  selector: 'app-guardaremail',
  templateUrl: './guardaremail.component.html',
  styleUrls: ['./guardaremail.component.css']
})
export class GuardaremailComponent{
  title: string = 'Guardar Email';
  emailContacto: string;

  constructor() { }

  guardarEmail(){
    localStorage.setItem('emailContacto', this.emailContacto);
  }


}
