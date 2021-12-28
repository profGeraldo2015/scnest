import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Movimento } from './movimento.entity';
import { MovimentoCadastrarDto} from '../dto/movimento.cadastrar.dto';
import { MovimentoAtualizarDto} from '../dto/movimento.atualizar.dto';
import { MovimentoAtualizarHistDto} from '../dto/movimento.atualizarHist.dto';

import { ResultadoDto} from '../dto/resultado.dto';

@Injectable()
export class MovimentoService {
  constructor(
    @Inject('MOVIMENTO_REPOSITORY')
    private movimentoRepository: Repository<Movimento>,
  ) {}

  async listar(): Promise<Movimento[]> {
    return this.movimentoRepository.find();
  }
  
  async cadastrar(data: MovimentoCadastrarDto):Promise<ResultadoDto>{
  let movimento = new Movimento()
  movimento.debito = data.debito
  movimento.credito = data.credito
  movimento.hist = data.hist
  movimento.obs = data.obs
  movimento.dt_vencto = data.dt_vencto
  movimento.dt_emissao = data.dt_emissao
  movimento.valor = data.valor
  return this.movimentoRepository.save(movimento)
  .then((result)=>{
    return <ResultadoDto>{
        status: true,
        mensagem: "Gravado com sucesso"
      }
  })
  .catch((error)=>{
    return <ResultadoDto>{
        status: false,
        mensagem: "Erro..."
      }
  })
  }

  async alterar(id:number , data: MovimentoAtualizarDto):Promise<ResultadoDto>{
    
    return this.movimentoRepository.update( { id }, data )
    .then((result)=>{
      return <ResultadoDto>{
          status: true,
          mensagem: "Alterado com sucesso"
        }
    })
    .catch((error)=>{
      return <ResultadoDto>{
          status: false,
          mensagem: "Erro..."
        }
    })
    }
  

  async alterarHist(id:number, data: MovimentoAtualizarHistDto):Promise<ResultadoDto>{
    
    return this.movimentoRepository.update( { id }, data)
    .then((result)=>{
      return <ResultadoDto>{
          status: true,
          mensagem: "Historico alterado com sucesso!!!"
        }
    })
    .catch((error)=>{
      return <ResultadoDto>{
          status: false,
          mensagem: "Erro na alteracao do historico..."
        }
    })
    }
  


  findOne(id: number): Promise<Movimento> {
    return this.movimentoRepository.findOne(id);
  }

  async remove(id: number): Promise<ResultadoDto> {

    return this.movimentoRepository.delete(id)
    .then((result)=>{
      return <ResultadoDto>{
        status: true,
        mensagem:"Apagado com sucesso!!!"
      }
    }).catch((error)=>{
       return <ResultadoDto>{
          status: false,
          mensagem: "Erro..."
        }
    });

  }

}