import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosService }  from '../../cursos/servicos.service';
import { CursosComponent } from '../cursos.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent
  ],
  exports: [CursosComponent],
  providers: [ServicosService]
})
export class ModuleModule { }
