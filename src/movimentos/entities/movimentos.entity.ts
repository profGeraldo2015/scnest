//ok, funcionando!!! mudar esta entity para a da tabela movimentos para poder usar com o sc2022(php)
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movimentos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 8 })
  CT_CREDITO: string;
 
  @Column({ length: 8 })
  CT_DEBITO: string;

  @Column({ length: 50})
  HIST: string;

  @Column({ length: 50})
  OBS: string;

  @Column()
  DT_EMISSAO: Date;

  @Column()
  DT_VENCTO: Date;

  @Column( { type: 'decimal', precision: 17, scale: 2 })  
  VALOR10: number;

  @Column({ length: 255})
  LINHA: string;

}