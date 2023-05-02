import { Module } from '@nestjs/common';

// ANNONCES
import { AnnoncesModule } from './annonces/annonces.module';

// ERREUR
import { ErreurModule } from './erreur/erreur.module';

// HANDLE MAIN PAGE
import { AppController } from './app.controller'
//import { AppService } from "./app.service";

// DB
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AnnoncesModule, ErreurModule],
  controllers: [AppController],
  //providers: [AppService]
})
export class AppModule {}
