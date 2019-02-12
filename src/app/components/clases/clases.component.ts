import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {

  alerta:string = 'alert-danger';
  propiedades:any = {
    danger: false
  };
  loading:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ejecutar() {
    this.loading = true;
    
    setTimeout( () => this.loading = false, 3000);
  }

}