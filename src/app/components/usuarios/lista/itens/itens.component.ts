import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../usuario/usuario.service';
import { Usuario } from 'src/app/model/usuario.model';


@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) { 
    this.usuarios = []
  }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(user => {
      this.usuarios = user
    })
  }

  

}
