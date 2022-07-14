import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardAttachment } from '../boards/cards/entities/card-attachment.entity';
import { CardComment } from '../boards/cards/entities/card-comment.entity';
import { CardLabel } from '../boards/cards/entities/card-label.entity';
import { Card } from '../boards/cards/entities/card.entity';
import { Board } from '../boards/entities/board.entity';
import { List } from '../boards/lists/entities/list.entity';
import { User } from '../users/entities/user.entity';
import config from './config';

export const createDatabase = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [config.KEY],
  useFactory: (configService: ConfigType<typeof config>) => ({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: configService.database.user,
    password: configService.database.password,
    database: configService.database.name,
    migrations: ['dist/migrations/*{.ts,.js}'],
    migrationsTableName: 'migrations_history',
    migrationsRun: true,
    synchronize: true,
    autoLoadEntities: true,
    retryDelay: 3000,
    retryAttempts: 10,
  }),
});

export const createTestDatabase = TypeOrmModule.forRoot({
  type: 'sqlite',
  database: ':memory:',
  entities: [CardAttachment, CardComment, CardLabel, Card, Board, List, User],
  autoLoadEntities: true,
  synchronize: true,
});
