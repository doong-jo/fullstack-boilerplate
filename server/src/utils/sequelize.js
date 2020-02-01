import { Sequelize } from 'sequelize';

const { DB_HOST, DB_PORT, DB_USER, DB_PW, DB_NAME } = process.env;

export const sequelize = new Sequelize({
  host: DB_HOST,
  port: DB_PORT ? +DB_PORT : 3306,
  username: DB_USER,
  password: DB_PW,
  database: DB_NAME,
  dialect: 'mariadb',
  logging: false,
  define: {
    freezeTableName: true,
  },
});

export async function migrate() {
  console.info('DB migration start...');
  await sequelize.sync();
  console.info('DB migration end...');
}
