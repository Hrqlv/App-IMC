import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Peso : number = 0;
  Altura : number = 0;
  IMC: number = 0;
  resposta: string = "";
  resposta2: number = 0;

  
  constructor() {}

  limpar(){
    this.Peso = 0;
    this.Altura = 0;
    this.IMC = 0;
    this.resposta2 = 0;
    this.resposta = "";
  }

  calcularIMC(){
    this.IMC = this.Peso / (this.Altura * this.Altura);
    this.resposta2 = this.IMC;

    if(this.IMC < 18.5) {
     this.resposta = "Abaixo do peso";
    }
    
    else if(this.IMC >= 18.5 && this.IMC <= 24.9){
     this.resposta = "Peso Normal";
    }
    
    else if(this.IMC >= 25  && this.IMC <= 29.9){
    this.resposta = "Sobrepeso";
    }

    else if(this.IMC >= 30 &&   this.IMC <= 34.9){
    this.resposta = "Obesidade Grau I";
    }

    else if(this.IMC >= 35 && this.IMC <= 39.9){
     this.resposta = "Obesidade Grau II";
    }
   
    else if(this.IMC >= 40){
    this.resposta = "Obesidade Grau III ou Morbida";
  }

}

}

