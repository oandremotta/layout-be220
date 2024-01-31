// user.service.ts
import { Injectable } from '@angular/core';
import { Usuario, usuarioFake } from '../mocks/user.data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsuario(): Usuario {
    return usuarioFake;
  }
}
