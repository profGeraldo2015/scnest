
import { IsString, IsDate, IsNumber, IsDateString , IsDefined} from 'class-validator';
import { Type  }  from 'class-transformer';

export class CreateMovimentoDto {
    @IsString()
	CT_DEBITO: string;
    
    CT_CREDITO: string;
    HIST: string;
    OBS: string;
    DT_VENCTO: Date;
    DT_EMISSAO: Date;
    VALOR10: number;
}
