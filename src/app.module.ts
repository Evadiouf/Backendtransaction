import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsModule } from './transactions/transactions.module';
import { Transaction } from './transactions/transaction.entity'; 



  @Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'mysql', 
        host: 'localhost',
        port: 3306, 
        username: 'root',
        password: '',
        database: 'Compte',
        entities: [Transaction],
        synchronize: false,  
      }),
      TransactionsModule,
      
    ],
    
  })
  export class AppModule {}
  

