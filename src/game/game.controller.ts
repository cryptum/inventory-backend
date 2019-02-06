import { Controller, Post, Req, Body, Delete, Param, Get, Query } from '@nestjs/common';
import { Game } from './models/interfaces/game';
import { GameService } from './game.service';

@Controller('game')
export class GameController {

    constructor(private readonly gameservice: GameService){}

    @Post()
    setGame(@Body() createGame: Game ){
        return;
    }

    @Get()
    findAll(@Query() query){
        return this.gameservice.getGames();
    }

    @Delete(':id')
    delGame(@Param('id') id){

    }
}
