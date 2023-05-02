import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnoncesController } from './annonces.controller';
import { AnnoncesService } from './annonces.service';
import { Annonce } from './annonces.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Annonce])],
  controllers: [AnnoncesController],
  providers: [AnnoncesService]
})
export class AnnoncesModule {}