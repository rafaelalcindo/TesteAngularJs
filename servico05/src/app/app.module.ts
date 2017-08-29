import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModuleModule } from './cursos/module/module.module';
import { ServicosService } from './cursos/servicos.service';
import { CriarCursoModule } from './criar-curso/criar-curso/criar-curso.module';


@NgModule({
  declarations: [
    AppComponent
      
  ],
  imports: [
    BrowserModule,
    CriarCursoModule,
    ModuleModule
  ],
  providers: [ServicosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
