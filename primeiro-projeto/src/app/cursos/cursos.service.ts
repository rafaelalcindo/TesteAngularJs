import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  valor1: number;
  valor2: number;
  resultado: number;
  resultado2: number;

  constructor() {
      this.valor1 = 45;
      this.valor2 = 67;
   }

  getCursos(){
    return ['Java', 'Ext Js', 'Angular'];
  }

  getValoresCalculo(){
    this.resultado = this.valor1 + this.valor2;
    while(this.resultado <= 1000){
      this.resultado2 = this.resultado + 1;
      return this.resultado2;
    }
  }

}
