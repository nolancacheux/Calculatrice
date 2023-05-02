import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Annonce } from './annonces.entity';
import { LessThan, Repository } from 'typeorm';

@Injectable()
export class AnnoncesService {
    start:number
    constructor(
        @InjectRepository(Annonce)
        private annoncesRepository: Repository<Annonce>,
        ) { }

    async createAnnonces(temps:number, calcul:string){
        const annonce = new Annonce();
        annonce.temps = temps;
        annonce.calcul = calcul;
        await annonce.save();
        return annonce;
    }

    async getAnnonces() {
        const res = await this.annoncesRepository.findOne({
            where: { },
            order: {
                id: "desc",
            }
        });
        console.log('Calcul est :', res);
        return res;
    }
    
    timeStart(){
        this.start = Date.now();
        return this.start;
    }

    timeEnd(){
        const end =  Date.now();

        console.log(`Execution time: ${end - this.start} ms`);
        return (end - this.start);
    }

    async getMoy(){
        const moy = await this.annoncesRepository.average('temps');
        console.log("Moyenne : ", moy);
        return moy;
    }

    async getPourc(t : number){
        const faster = await this.annoncesRepository.find({
            where: { 
                temps: LessThan(t),
            },
        });
        console.log(faster);
        const nb = await this.annoncesRepository.count();
        let pourc = ((faster.length/nb)*100).toFixed(2);
        console.log('Pourcentage plus rapide :', pourc);
        return pourc;
    }
};
