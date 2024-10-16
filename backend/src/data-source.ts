import "reflect-metadata";
import { DataSource } from "typeorm";
import { Sabores } from "./entity/Sabores";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "192.168.0.76",
  port: 5432,
  username: "postgres",
  password: "docker",
  database: "pizza-army",
  synchronize: true,
  logging: false,
  entities: [User, Sabores],
  migrations: ["src/migration/*.ts"],
  subscribers: [],
});
