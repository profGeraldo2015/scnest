import { Controller, Get, Post ,Body,Param,Patch,Delete,Put} from '@nestjs/common';
import { Movimento } from './movimento.entity';
import { MovimentoService } from './movimento.service';
import { MovimentoCadastrarDto } from '../dto/movimento.cadastrar.dto';
import { MovimentoAtualizarHistDto } from '../dto/movimento.atualizarHist.dto';
import { MovimentoAtualizarDto } from '../dto/movimento.atualizar.dto';


import { ResultadoDto } from '../dto/resultado.dto';


@Controller('movimento')
export class MovimentoController {
  
  constructor(private readonly movimentoService: MovimentoService) {

  }

  @Get('listar')
  async listar(): Promise<Movimento[]>{
      return this.movimentoService.listar()
  }

  @Post('cadastrar')
  async cadastrar(@Body() data: MovimentoCadastrarDto): Promise<ResultadoDto>{
    return this.movimentoService.cadastrar(data)
  }


  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.movimentoService.findOne(id);
  }

  @Patch(':id')
  alterar(@Param('id') id: number, @Body() movimentoAtualizarDto: MovimentoAtualizarDto) {
    return this.movimentoService.alterar(id, movimentoAtualizarDto);
  }

  @Put(':id')
  alterarHist(@Param('id') id: number, @Body() movimentoAtualizarHistDto: MovimentoAtualizarHistDto) {
    return this.movimentoService.alterarHist(id, movimentoAtualizarHistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.movimentoService.remove(+id);
  }


}
