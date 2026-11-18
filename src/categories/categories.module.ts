import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CategoriesController } from './categories.controller';
import { CATEGORY_SERVICE } from '../config/service';
import { envs } from '../config/envs';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: CATEGORY_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.categoriesMicroserviceHost,
          port: envs.categoriesMicroservicePort,
        },
      },
    ]),
  ],
  controllers: [CategoriesController],
  providers: [],
})
export class CategoriesModule {}
