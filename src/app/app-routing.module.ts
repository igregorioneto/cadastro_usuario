import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaComponent } from './components/usuarios/lista/lista.component';
import { CriarComponent } from './components/usuarios/criar/criar.component';

const routes: Routes = [
  {path: '', component: ListaComponent},
  {path: 'criar', component: CriarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
