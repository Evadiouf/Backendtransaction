import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('depenses')
export class Depense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titre: string;

  @Column('decimal')
  montant: number;
}
