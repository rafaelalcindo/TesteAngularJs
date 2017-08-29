
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';


const cursosRoutes: Routes =[
    { path: '', component: CursosComponent },
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: ':id', component: CursoDetalheComponent }
    
];

//export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

@NgModule({    
    imports: [  RouterModule.forChild(cursosRoutes) ],
    exports: [ RouterModule ]
})

//export class FeatureModule {}
export class CursosRoutingModule{}