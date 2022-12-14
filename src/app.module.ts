import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuyticketModule } from './buyticket/buyticket.module';
import { HistoryModule } from './history/history.module';
import { NumbergenModule } from './numbergen/numbergen.module';
import { CardModule } from './card/card.module';




@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'lottery1',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
  UserModule,
  BuyticketModule,
  HistoryModule,
  NumbergenModule, CardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
