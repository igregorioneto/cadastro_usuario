import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseURL = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseURL)
  }

  setUsuarios(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseURL, usuario)
  }

  getUsuarioId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseURL}/${id}`)
  }

  deletarUsuario(id: number):Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.baseURL}/${id}`)
  }

  showConsole(msg: String): void {
    console.log(msg)
  }
}
