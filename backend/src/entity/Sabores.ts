import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sabores {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, length: 50 })
  nome: string;

  @Column()
  descricao: string;

  @Column()
  preco: number;

  @Column()
  fotoUrl: string;
}
