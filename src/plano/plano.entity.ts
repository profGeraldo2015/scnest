
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Plano {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 8 })
  numero: string;
 
  @Column({ length: 50 })
  descricao: string;

  @Column()
  dt_saldo: Date;

  @Column( { type: 'decimal', precision: 17, scale: 2 })  
  saldo_inic: number;

  @Column( { type: 'decimal', precision: 17, scale: 2 })  
  saldo_iniv: number;
 
 @Column()
  dt_saus: Date;

  @Column( { type: 'decimal', precision: 17, scale: 2 })  
  c_saieus: number;

  @Column( { type: 'decimal', precision: 17, scale: 2 })  
  c_saivus: number;



}