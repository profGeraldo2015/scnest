//ok, funcionando!!! mudar esta entity para a da tabela movimentos para poder usar com o sc2022(php)
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Type  }  from 'class-transformer';
import { IsString, IsDate, IsNumber, IsDateString } from 'class-validator';

@Entity()
export class Movimentos {
  @PrimaryGeneratedColumn()
  id: number;
  @IsString()
  @Column({ length: 8 })
  CT_CREDITO: string;
  @IsString()
  @Column({ length: 8 })
  CT_DEBITO: string;

  @Column({ length: 50})
  HIST: string;

  @Column({ length: 50})
  OBS: string;
  
  @IsDate()
  @Type(()=> Date)
  @Column()
  DT_EMISSAO: Date;

  @IsDate()
  @Type(()=> Date)
  @Column()
  DT_VENCTO: Date;

  @IsNumber()
  @Type(()=> Number)
  @Column( { type: 'decimal', precision: 17, scale: 2 })  
  VALOR10: number;

  @Column({ length: 255})
  LINHA: string;

}