import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { movimentosProviders } from './movimentos.providers';
import { MovimentosService } from './movimentos.service';
import { MovimentosController } from './movimentos.controller';

@Module({
  imports:[ DatabaseModule],
  controllers: [MovimentosController],
  providers: [
  ...movimentosProviders,
  MovimentosService,
  ],
})
export class MovimentosModule {}
