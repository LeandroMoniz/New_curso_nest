import { Body, Controller, Post } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';

@Controller('api/v1/jogadores')
export class JogadoresController {

    constructor(private readonly jogadoresService: JogadoresService) { }
    @Post()
    async criarAtualizarJogador(
        @Body() criaJogadorDto: CriarJogadorDto)  {
            await this.jogadoresService.criarAtualizarJogador(criaJogadorDto) }


        // utilizado para teste de funcionamento da controlller    
        // const {email} = criaJogadorDto
        // return JSON.stringify(`{
        //     "nome": ${email}
        // }`)
    }

