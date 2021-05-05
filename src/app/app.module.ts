import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/template/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { ListaComponent } from './components/usuarios/lista/lista.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

import { CriarComponent } from './components/usuarios/criar/criar.component';
import { ItensComponent } from './components/usuarios/lista/itens/itens.component';
import { CpfPipe } from './pipes/cpf.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaComponent,
    CriarComponent,
    ItensComponent,
    CpfPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
