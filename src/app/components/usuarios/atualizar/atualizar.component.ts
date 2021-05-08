import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {

  id: number = 0;

  usuario: Usuario = {
    nome: '',
    idade: 18,
    cpf: '',
    telefone: '',
    email: '',
  }

  constructor(private usuarioService: UsuarioService, 
    private route: ActivatedRoute,
    private router: Router) { 

  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.usuarioService.getUsuarioId(this.id)
    .subscribe(usuario => {
      this.usuario = usuario
    })
  }

  cancelar(): void {
    this.router.navigate([''])
  }

  atualizar() {
    console.log(this.usuario)
    this.usuarioService.atualizarUsuario(this.id, this.usuario)
    .subscribe(usuario => {
      console.log(usuario)
      this.router.navigate([''])
    })
  }

}
