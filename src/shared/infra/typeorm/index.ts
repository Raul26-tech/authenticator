import environment from "@config/environment";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: environment.DB_TYPE,
  host: environment.DB_HOST,
  port: environment.DB_PORT,
  username: environment.DB_USERNAME,
  password: environment.DB_PASSWORD,
  database: environment.DB_DATABASE,
  logging: environment.DB_LOGGING,
  entities: ["./src/modules/**/entities/*.ts"],
  migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
});

export const connectDatabase = async () => {
  try {
    const dataSource = await AppDataSource.initialize();
    console.log("Data Source inicializado com sucesso");

    await dataSource.runMigrations();
    console.log("Migration executadas com sucesso");
  } catch (error) {
    console.error("Erro ao inicializar  Data Source", error);
  }
};
