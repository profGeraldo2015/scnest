import { Connection } from 'typeorm';
import { Movimento } from './movimento.entity';

export const movimentoProviders = [
  {
    provide: 'MOVIMENTO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Movimento),
    inject: ['DATABASE_CONNECTION'],
  },
];
