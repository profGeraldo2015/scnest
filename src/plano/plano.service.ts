import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Plano } from './plano.entity';
import { PlanoCadastrarDto } from '../dto/plano.cadastrar.dto';
import { ResultadoDto } from '../dto/resultado.dto';


@Injectable()
export class PlanoService {
  constructor(
    @Inject('PLANO_REPOSITORY')
    private planoRepository: Repository<Plano>,
    ) {}

  async listar(): Promise<Plano[]> {

    return this.planoRepository.find();
    
  }
  async listardesc(): Promise<Plano[]> {

    return this.planoRepository.query('SELECT numero,descricao FROM plano ORDER BY numero');
    
  }
  



  async cadastrar(data: PlanoCadastrarDto):Promise<ResultadoDto>{

    let plano = new Plano()
    plano.numero = data.numero
    plano.descricao = data.descricao
    plano.dt_saldo = data.dt_saldo
    plano.saldo_inic = data.saldo_inic
    plano.saldo_iniv = data.saldo_iniv
    plano.dt_saus = data.dt_saus
    plano.c_saieus = data.c_saieus
    plano.c_saivus = data.c_saivus

    return this.planoRepository.save(plano)
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

  async listarbyoorder(): Promise<Plano[]>{

   return this.planoRepository.find(); //createQueryBuilder("plano").orderBy("id", "DESC");

 }

}