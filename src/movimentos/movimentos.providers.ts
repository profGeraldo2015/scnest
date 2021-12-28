import { Connection } from 'typeorm';
import { Movimentos } from './entities/movimentos.entity';

export const movimentosProviders = [
  {
    provide: 'MOVIMENTOS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Movimentos),
    inject: ['DATABASE_CONNECTION'],
  },
];
