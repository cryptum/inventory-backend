import { Controller, Post, Req, Body, Delete, Param, Get, Query, Put } from '@nestjs/common';
import { Game } from './models/interfaces/game';
import { GameService } from './game.service';

@Controller('game')
export class GameController {

    constructor(private readonly gameservice: GameService){}

    @Post()
    setGame(@Body() createGame: Game ){
        this.gameservice.addNewGame(createGame);
        //return this.gameservice.getGamesList();
    }

    @Get()
    findAllGame(@Query() query){
        return this.gameservice.getGamesList();
    }

    @Delete(':id')
    delGame(@Param('id') id){
        this.gameservice.removeGame(id);
    }

    @Put()
    editGame(@Param('id') editGame: Game, originalSlug: string){
        this.gameservice.editGame(editGame, originalSlug);
    }
}
