import { Controller, Get } from '@nestjs/common';
import { ErreurService } from './erreur.service';

@Controller('erreur')
export class ErreurController {
    constructor(private erreurService:ErreurService) {}
    
    @Get()
    async getErreur(){
        console.log('get erreur, nombre, dernière date');
        this.erreurService.createErreur();  
        let lasterror = await this.erreurService.dateErreur();
        let nberror = await this.erreurService.getNumber();
        let obj = {lasterror, nberror};        
        return obj;
    }
}