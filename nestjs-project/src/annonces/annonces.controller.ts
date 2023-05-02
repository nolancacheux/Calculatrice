import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { MessageDto } from './annonces.dto';

import { AnnoncesService } from './annonces.service';

@Controller('annonces')
export class AnnoncesController {
    constructor(private annoncesService: AnnoncesService) {}

    @Get()
    StartTimer() {
        console.log('First carac');
        this.annoncesService.timeStart();
        return {message: "start timer"}
    }

    @Post()
    async createAnnonce(@Body() message: MessageDto){
        const t = this.annoncesService.timeEnd();
        let annonce = await this.annoncesService.createAnnonces(t, message.calcul);
        let moyenne = await this.annoncesService.getMoy();
        let pourc = await this.annoncesService.getPourc(t);
        let obj = {annonce,moyenne, pourc};
        return obj;
    }
}