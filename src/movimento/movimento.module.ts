import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { movimentoProviders } from './movimento.providers';
import { MovimentoService } from './movimento.service';
import { MovimentoController} from './movimento.controller';

@Module({
  imports: [ DatabaseModule ],
  controllers:[ MovimentoController ],
  providers: [
    ...movimentoProviders,
    MovimentoService,
  ],
})
export class MovimentoModule {}