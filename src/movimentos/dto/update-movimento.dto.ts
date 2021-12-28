import { PartialType } from '@nestjs/mapped-types';
import { CreateMovimentoDto } from './create-movimento.dto';

export class UpdateMovimentoDto extends PartialType(CreateMovimentoDto) {
	CT_DEBITO: string;
    CT_CREDITO: string;
    HIST: string;
    OBS: string;
    DT_VENCTO: Date;
    DT_EMISSAO: Date;
    VALOR10: number;

}
