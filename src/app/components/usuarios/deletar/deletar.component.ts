import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  nome: string = '';
  cpf: string = '';

  id: number = 0;

  constructor(
    private usuarioService: UsuarioService, 
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.usuarioService.getUsuarioId(Number(this.id))
    .subscribe(usuario => {
      this.nome = usuario.nome
      this.cpf = usuario.cpf
    })
  }

  cancelar() {
    this.router.navigate(['/'])
  }

  excluir() {
    this.usuarioService.deletarUsuario(Number(this.id))
    .subscribe(msg => {
      this.router.navigate(['/'])
      console.log(msg)
    })
    
  }

}
