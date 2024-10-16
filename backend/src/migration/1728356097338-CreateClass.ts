import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClass1728356097338 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "sabores",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "descricao",
            type: "text",
          },
          {
            name: "preco",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "fotoUrl",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("sabores");
  }
}
