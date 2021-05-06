import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {

  usuario: Usuario = {
    nome: '',
    idade: 0,
    cpf: '',
    telefone: '',
    email: ''
  }

  constructor(private usuarioService:UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrarUsuario(): void {
    this.usuarioService.setUsuarios(this.usuario)
    .subscribe(user => {
      this.router.navigate(['/'])
    })
  }

  cancelar(): void {
    // this.router.navigateByUrl('/')
    this.router.navigate(['/'])
  }

}
