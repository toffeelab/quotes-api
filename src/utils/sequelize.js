import Sequelize from 'sequelize';
import config from '@config/mysql';

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: 'mysql',
    define: {
      charset: 'utf8',
      collate: 'utf8_unicode_ci',
      timestamps: true,
    }
  }
);

export default sequelize;