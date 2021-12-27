
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movimento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 8 })
  credito: string;
 
  @Column({ length: 8 })
  debito: string;

  @Column({ length: 50})
  hist: string;

  @Column({ length: 50})
  obs: string;

  @Column()
  dt_emissao: Date;

  @Column()
  dt_vencto: Date;

  @Column( { type: 'decimal', precision: 17, scale: 2 })  
  valor: number;
}