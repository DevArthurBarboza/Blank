import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valor = "0"  

  ckNumero(numero) {
    if (this.valor == "0") {
      this.valor = numero
    }
    else {
      this.valor += numero;
    }
  }

  ckCleanE() {
    this.valor = "0"

  }

  ckLimpar () {

  }

  ckPonto () {
    if (!this.valor.includes(".") ) {
      this.valor+=".";
     } 
    }



  constructor() { }

}
