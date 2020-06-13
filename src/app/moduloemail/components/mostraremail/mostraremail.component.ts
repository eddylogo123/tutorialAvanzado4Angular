import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-mostraremail',
  templateUrl: './mostraremail.component.html',
  styleUrls: ['./mostraremail.component.css']
})
export class MostraremailComponent implements  DoCheck, OnInit {
  title: string = 'Mostrar Email';
  emailContacto: string;

  constructor() { }

  ngOnInit(): void {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngDoCheck(): void {
    this.emailContacto = localStorage.getItem('emailContacto');
  }


  borrarEmail(){
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }

}
