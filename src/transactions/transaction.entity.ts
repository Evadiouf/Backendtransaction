import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: 'revenue' | 'expense';

  @Column('decimal', { precision: 10, scale: 2 })
  somme: number;

  @Column({ nullable: true })
  description?: string;

  @Column()
  date: Date;
}
