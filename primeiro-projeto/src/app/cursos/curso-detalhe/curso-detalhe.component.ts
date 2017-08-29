import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  nomecurso: string[];

  constructor() { 
    this.nomecurso = ['Ciencia da Computação', 'Analise e Desenvolvimento de Sistema','Redes de Computadores', 'Engenharia da Computação'];
  }

  ngOnInit() {
  }

}
