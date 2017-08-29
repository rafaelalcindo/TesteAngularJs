import { Component, OnInit } from '@angular/core';

import { ServicosService } from './servicos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  cursoService: ServicosService;
  
  constructor(private _cursosService: ServicosService) { 
    //this.cursoService = new ServicosService();
    this.cursoService = _cursosService;
  }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
    this.cursoService.emitirCursoCriado.subscribe(

      curso => console.log(curso)
      
    );
  }

}
