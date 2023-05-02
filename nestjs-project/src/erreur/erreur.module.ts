import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ErreurController } from './erreur.controller';
import { ErreurService } from './erreur.service';
import { Erreur } from './erreur.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Erreur])],
  controllers: [ErreurController],
  providers: [ErreurService]
})
export class ErreurModule {}