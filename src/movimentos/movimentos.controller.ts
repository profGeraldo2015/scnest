import { Controller, Get, Post, Body, Patch,Put, Param, Delete } from '@nestjs/common';
import { Movimentos } from './entities/movimentos.entity';
import { MovimentosService } from './movimentos.service';
import { CreateMovimentoDto } from './dto/create-movimento.dto';
import { UpdateMovimentoDto } from './dto/update-movimento.dto';
import { MovimentosAtualizarHistDto } from './dto/movimentos.atualizarHist.dto';

@Controller('movimentos')
export class MovimentosController {
  constructor(private readonly movimentosService: MovimentosService) {}

  @Post()
  create(@Body() createMovimentoDto: CreateMovimentoDto) {
    return this.movimentosService.create(createMovimentoDto);
  }

  @Get('listar')
  async listar(): Promise<Movimentos[]> {
    return this.movimentosService.listar();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movimentosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateMovimentoDto: UpdateMovimentoDto) {
    return this.movimentosService.update(id, updateMovimentoDto);
  }

  @Put(':id')
  alterarHist(@Param('id') id: number, @Body() movimentosAtualizarHistDto: MovimentosAtualizarHistDto) {
    return this.movimentosService.alterarHist(id, movimentosAtualizarHistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movimentosService.remove(+id);
  }
}
