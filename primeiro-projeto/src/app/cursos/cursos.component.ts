import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  //http

  nomePortal:string;

  cursos: string[];
  calculoComplexo: number;


  constructor(private cursosService: CursosService) { 
    this.nomePortal = 'http://loiane.training';
    //var servicos = new CursosService();

    this.cursos = this.cursosService.getCursos();
    this.calculoComplexo = this.cursosService.getValoresCalculo();

  }

  ngOnInit() {
  }

}
