/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import IPayload from './interfaces/Ipayload';
import { JwtService } from '@nestjs/jwt';
import ISession  from './interfaces/ISession';
import ILogin from './interfaces/ILogin';


@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  // Méthode pour valider un utilisateur (exemple simplifié)
  validateUser(user: ILogin): Promise<ISession | null> {
    // Remplacez cette logique par une vérification réelle (ex. base de données)
    if (user.username === 'test' && user.password === 'password') {
      return Promise.resolve({ userId: '1', username: 'test' } as ISession);
    }
    return Promise.resolve(null);
  }

  // Méthode pour générer un token JWT
   login(user: ISession) {
    const payload: IPayload = { sub: user.userId, username: user.username };
    return {
      access_token: this.jwtService.sign(payload), // Génère le token JWT
    };
  }

    // Méthode pour générer un token JWT
    register(user: ISession) {
        const payload: IPayload = { sub: user.userId, username: user.username };
        return {
          access_token: this.jwtService.sign(payload), // Génère le token JWT
        };
      }
}
