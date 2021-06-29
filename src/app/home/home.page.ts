import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  operacao:string="0"
  valor:string = "0" 
  
  //valores para cálculo
  valorFim:number
  valorNum: number
  memoria: number

  ckNumero(numero:string) {
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

  valorToMemory(){
    if (this.valor != "0"){
      this.memoria=Number(this.valor);
    }
    
  }

  valorToNum(){
    this.valorNum = Number(this.valor);
  }

  calcular() {
    this.valorToNum();
    if (this.operacao == "/") {
      this.valorFim = (this.memoria / this.valorNum);
      this.valor = this.valorFim.toString()

    } else if (this.operacao == "+") {
      this.valorFim = (this.memoria + this.valorNum);
      this.valor = this.valorFim.toString()

    } else if (this.operacao == "-") {
      this.valorFim = (this.memoria - this.valorNum);
      this.valor = this.valorFim.toString()

    } else if (this.operacao == "*") {
      this.valorFim = (this.memoria * this.valorNum);
      this.valor = this.valorFim.toString()
    }
  }

  ckOperacao(op){
    if (this.operacao != "")
      this.calcular;
    
    this.operacao = op;
    this.valorToMemory();
    this.ckCleanE();
  }
  
  
  constructor() { }
  
}
