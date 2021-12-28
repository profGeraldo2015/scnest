import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlanoModule } from './plano/plano.module';
import { MovimentoModule } from './movimento/movimento.module';
import { MovimentosModule } from './movimentos/movimentos.module';


@Module({
  imports: [
  PlanoModule,
  MovimentoModule,
  MovimentosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
