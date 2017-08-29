import { Component, OnInit } from '@angular/core';

import { ServicosService }  from '../cursos/servicos.service';


@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursoService: ServicosService) {

  }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
  }

  onAddCurso(curso: string){
    this.cursoService.addCurso(curso);
  }

}
