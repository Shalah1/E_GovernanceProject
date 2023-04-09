import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConnectOpts } from 'net';
import { ConnectionOptions } from 'tls';
export const typeOrmModuleConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'goodboy',
    database: 'Practice1',
    autoLoadEntities: true,
    synchronize: true,
} as ConnectionOptions