import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainemail',
  templateUrl: './mainemail.component.html',
  styleUrls: ['./mainemail.component.css']
})
export class MainemailComponent implements OnInit {
  title: string = 'Modulo de email';

  constructor() { }

  ngOnInit(): void {
    console.log('Componente principal del modulo cargado...');
  }

}
