import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { planoProviders } from './plano.providers';
import { PlanoService } from './plano.service';
import { PlanoController} from './plano.controller';

@Module({
  imports: [ DatabaseModule ],
  controllers:[ PlanoController ],
  providers: [
    ...planoProviders,
    PlanoService,
  ],
})
export class PlanoModule {}