import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pizzas {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, length: 50 })
  flavor: string;

  @Column()
  description: string;

  @Column({
    type: "decimal",
    precision: 10,
    scale: 2,
  })
  price: number;

  @Column()
  size: string;

  @Column()
  slices: number;

  @Column()
  fotoUrl: string;

  @Column()
  characteristics: string;

  @Column()
  quantity: number;
}
