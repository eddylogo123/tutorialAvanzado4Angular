import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title:string = 'Contactos cargado';
  emailContacto:string;
  constructor() { }

  ngOnInit(): void {
    console.log('contact.component cargado !!');

  }

  guardarEmail(){
    /*console.log('*****');
    console.log(this.emailContacto);*/

    //esto es como guardar una cookie en el navegador
    localStorage.setItem('emailContacto', this.emailContacto);

    // localStorage.getItem('emailContacto');

  }
}
