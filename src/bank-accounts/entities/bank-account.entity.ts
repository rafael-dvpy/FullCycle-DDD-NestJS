import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BankAccount {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  balance: number;

  @Column({ length: 255 })
  account_number: string;
}
