import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaComponent } from './components/usuarios/lista/lista.component';
import { CriarComponent } from './components/usuarios/criar/criar.component';
import { AtualizarComponent } from './components/usuarios/atualizar/atualizar.component';
import { DeletarComponent } from './components/usuarios/deletar/deletar.component';

const routes: Routes = [
  {path: '', component: ListaComponent},
  {path: 'criar', component: CriarComponent},
  {path: 'atualizar/:id', component: AtualizarComponent},
  {path: 'deletar/:id', component: DeletarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
