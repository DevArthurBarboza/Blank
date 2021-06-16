import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valor = "" ; 

  ckNumero (numero) {
    this.valor += numero.toString (); 


  }

  constructor() {}

}
