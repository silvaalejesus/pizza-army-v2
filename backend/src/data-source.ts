import "reflect-metadata";
import { DataSource } from "typeorm";
import { Pizzas } from "./entity/Pizza";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "192.168.0.76",
  port: 5432,
  username: "postgres",
  password: "docker",
  database: "pizza-army",
  synchronize: true,
  logging: false,
  entities: [Pizzas],
  migrations: ["src/migration/*.ts"],
  subscribers: [],
});
