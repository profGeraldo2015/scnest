import { PartialType } from '@nestjs/mapped-types';
import { CreateMovimentoDto } from './create-movimento.dto';
import { IsString, IsDate, IsNumber, IsDateString , IsDefined} from 'class-validator';
import { Type  }  from 'class-transformer';

export class UpdateMovimentoDto extends PartialType(CreateMovimentoDto) {
    
    //@IsString()
	CT_DEBITO: string;
    
    //@IsString()
    CT_CREDITO: string;
    
    //@IsString()
    HIST?: string;
    
    //@IsString()
    OBS?: string;
    
    //@IsDate()
    DT_VENCTO: Date;

    //@IsDate()
    DT_EMISSAO: Date;
    
    //@Type(()=>Number)
    //@IsNumber()
    VALOR10: number;

}
