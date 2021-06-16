import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valor = 0 ; 

  ckNumero (numero) {
    let aux = this.valor.toString() + numero.toString(); 
    this.valor = parseFloat (aux)
  }

  constructor() {}

}
