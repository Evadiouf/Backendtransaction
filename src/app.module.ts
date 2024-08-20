import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RevenuModule } from './revenu/revenu.module';
import { DepenseModule } from './depense/depense.module';
import { Depense } from './depense/depense.entity';
import { Revenu } from './revenu/revenu.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'Compte',
      entities: [Depense, Revenu],
      synchronize: false,
    }),
    DepenseModule,
    RevenuModule,
  ],
})
export class AppModule {}
