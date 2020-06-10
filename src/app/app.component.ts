import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit{
  title = 'NGZOO';
  emailContacto: string;

  ngDoCheck(): void {
    // console.log('El DOCHECK  se ha ejecutado...');
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngOnInit(): void {
    // console.log(localStorage.getItem('emailContacto'));
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  borrarEmail(){
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }
}
