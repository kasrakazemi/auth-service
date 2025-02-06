/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'auth',
      protoPath: 'C:/Users/kasra/Downloads/Learning/Nest Project/hotel-booking-system/proto/auth.proto',
       url: '0.0.0.0:5001',
    },
  });

  console.log('🚀 Auth Service is running on gRPC: 0.0.0.0:5001');
  await app.listen();
}

bootstrap();
