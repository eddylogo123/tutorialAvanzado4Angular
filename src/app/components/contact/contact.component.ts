import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title:string = 'Contactos cargado';
  constructor() { }

  ngOnInit(): void {
    console.log('contact.component cargado !!');
  }

}
