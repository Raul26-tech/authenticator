import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddProductIdToOrdersProducts1699914484814
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "orders_products",
      new TableColumn({
        name: "product_id",
        type: "uuid",
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      "orders_products",
      new TableForeignKey({
        name: "OrdersProducts",
        columnNames: ["product_id"],
        referencedTableName: "products",
        referencedColumnNames: ["id"],
        onDelete: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("orders_products", "OrdersProducts");
    await queryRunner.dropColumn("orders_products", "products_id");
  }
}
