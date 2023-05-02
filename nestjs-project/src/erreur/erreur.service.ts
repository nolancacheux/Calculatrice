import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Erreur } from './erreur.entity';
import { MaxKey, Repository } from 'typeorm';

@Injectable()
export class ErreurService {
    constructor(
        @InjectRepository(Erreur)
        private erreurRepository : Repository<Erreur>,
    ){}

    async createErreur(){
        const erreur = new Erreur();
        let d = new Date();
        erreur.created = d.toISOString().split('T')[0]+' '+d.toTimeString().split(' ')[0];
        console.log("erreur crée", erreur);
        
        try {
            await erreur.save(); 
        } catch (error) {
            console.log(error);
        }
        return erreur;
    }

    async getNumber(){
        const nb = await this.erreurRepository.count();
        console.log('nombre erreur:', nb+1);
        return nb+1;
    }

    async dateErreur(){
        const date = await this.erreurRepository.findOne({
            where: { },
            order: {
                id: "desc",
            }
        });
        console.log('dernière date:', date);
        return date;
    }
}