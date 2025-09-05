import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { AuthModule } from './features/auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
