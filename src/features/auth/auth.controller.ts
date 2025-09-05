import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import type ILogin from './interfaces/ILogin';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() body: ILogin) {
      const user = await this.authService.validateUser(body);
      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }
      return this.authService.login(user); // Retourne le token JWT
    }
    
    @Post('register')
    async register(@Body() body: ILogin) {
      const user = await this.authService.validateUser(body);
      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }
      return this.authService.register(user); // Retourne le token JWT
    }
}
