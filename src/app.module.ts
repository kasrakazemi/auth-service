/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:1234@localhost:27017/main_db'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
