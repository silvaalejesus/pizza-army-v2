import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClassPizzas1732587200971 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "pizzas",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "flavor",
            type: "varchar",
          },
          {
            name: "description",
            type: "text",
          },
          {
            name: "price",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "size",
            type: "text",
          },
          {
            name: "slices",
            type: "int",
          },
          {
            name: "fotoUrl",
            type: "text",
          },
          {
            name: "characteristics",
            type: "text",
          },
          {
            name: "quantity",
            type: "int",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("pizzas");
  }
}
