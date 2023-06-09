import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { Configurate } from 'src/core/utils/configurate';

@Injectable()
export class PasswordGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const password = request.body.secret; // Assumindo que a senha é passada no corpo da requisição

    // Aqui você pode definir a senha específica que deve ser fornecida
    const requiredPassword = Configurate.secretPassword;

    // Compare a senha fornecida com a senha específica
    if (password === requiredPassword) {
      return true; // Permite a criação do usuário
    }

    return false; // Bloqueia a criação do usuário
  }
}
