import { Connection } from 'typeorm';
import { Plano } from './plano.entity';

export const planoProviders = [
  {
    provide: 'PLANO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Plano),
    inject: ['DATABASE_CONNECTION'],
  },
];
