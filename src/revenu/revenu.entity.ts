import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('revenus')
export class Revenu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titre: string;

  @Column('decimal')
  montant: number;
}
