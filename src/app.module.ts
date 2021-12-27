import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlanoModule } from './plano/plano.module';
import { MovimentoModule } from './movimento/movimento.module';


@Module({
  imports: [
  PlanoModule,
  MovimentoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
