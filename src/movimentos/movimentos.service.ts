import { Injectable,Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Movimentos } from './entities/movimentos.entity';
import { CreateMovimentoDto } from './dto/create-movimento.dto';
import { UpdateMovimentoDto } from './dto/update-movimento.dto';
import { MovimentosAtualizarHistDto } from './dto/movimentos.atualizarHist.dto';

import { ResultadoDto} from '../dto/resultado.dto';


@Injectable()
export class MovimentosService {
  constructor(
    @Inject('MOVIMENTOS_REPOSITORY')
    private movimentosRepository: Repository<Movimentos>,
    ) {}

  async listar(): Promise<Movimentos[]> {
    return this.movimentosRepository.find();
  }

  async alterarHist(id:number, data: MovimentosAtualizarHistDto):Promise<ResultadoDto>{

    return this.movimentosRepository.update( { id }, data)
    .then((result)=>{
      return <ResultadoDto>{
        status: true,
        mensagem: "Historico alterado com sucesso!!!"
      }
    })
    .catch((error)=>{
      return <ResultadoDto>{
        status: false,
        mensagem: "Erro ao alterar o historico..."
      }
    })
  }

  async update(id: number, updateMovimentoDto: UpdateMovimentoDto):Promise<ResultadoDto> {
    //return `This action updates a #${id} movimento`;
    console.log(updateMovimentoDto);
    return this.movimentosRepository.update( { id }, updateMovimentoDto)
    .then((result)=>{
      return <ResultadoDto>{
        status: true,
        mensagem: "Alterado com sucesso!!!"
      }
    })
    .catch((error)=>{
      return <ResultadoDto>{
        status: false,
        mensagem: "Erro ao alterar ..."
      }
    })
  }

  async create(data: CreateMovimentoDto):Promise<ResultadoDto> {

    let movimento = new Movimentos()
    movimento.CT_DEBITO = data.CT_DEBITO
    movimento.CT_CREDITO = data.CT_CREDITO
    movimento.HIST = data.HIST
    movimento.OBS = data.OBS
    movimento.DT_VENCTO = data.DT_VENCTO
    movimento.DT_EMISSAO = data.DT_EMISSAO
    movimento.VALOR10 = data.VALOR10
    return this.movimentosRepository.save(movimento)
    .then((result)=>{
      return <ResultadoDto>{
        status: true,
        mensagem: "Gravado com sucesso!!!"
      }
    })
    .catch((error)=>{
      return <ResultadoDto>{
        status: false,
        mensagem: "Erro ao cadastrar..."
      }
    })


    //return 'This action adds a new movimento';
  }


  findAll() {

    return `This action returns all movimentos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movimento`;
  }
  remove(id: number) {
    return `This action removes a #${id} movimento`;
  }
}
