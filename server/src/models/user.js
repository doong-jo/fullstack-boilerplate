import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/sequelize';

const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
  },
);

export { User };
