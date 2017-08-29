import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosService }  from '../../cursos/servicos.service';
import { CriarCursoComponent } from '../criar-curso.component';
import { ReceberCursoCriadoComponent } from '../../receber-curso-criado/receber-curso-criado.component';


@NgModule({
  imports: [
    CommonModule
  ],
  
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  exports: [CriarCursoComponent],
  providers: [ServicosService]
})
export class CriarCursoModule { }
