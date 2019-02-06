import { Controller, Post, Req, Body, Delete, Param, Get, Query } from '@nestjs/common';
import { Game } from '../models/interfaces/game';

@Controller('game')
export class GameController {

    @Post()
    setGame(@Body() createGame: Game ){
        return;
    }

    @Get()
    findAll(@Query() query){
        return;
    }

    @Delete(':id')
    delGame(@Param('id') id){

    }
}
