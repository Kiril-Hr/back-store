import { Sequelize } from "sequelize";

export default new Sequelize(
  "online_store",
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    dialect: "postgres",
    host: process.env.PGHOST,
    port: process.env.PGPORT,
  }
);
