import { Controller, Get, Post ,Body} from '@nestjs/common';
import { Plano } from './plano.entity';
import { PlanoService } from './plano.service';
import { PlanoCadastrarDto } from '../dto/plano.cadastrar.dto';
import { ResultadoDto } from '../dto/resultado.dto';


@Controller('plano')
export class PlanoController {
  
  constructor(private readonly planoService: PlanoService) {

  }

  @Get('listar')
  async listar(): Promise<Plano[]>{
      return this.planoService.listar()
  }

  @Get('listardesc')
  async listardesc(): Promise<Plano[]>{
      return this.planoService.listardesc()
  }

  @Post('cadastrar')
  async cadastrar(@Body() data: PlanoCadastrarDto): Promise<ResultadoDto>{
    return this.planoService.cadastrar(data)
  }

}
