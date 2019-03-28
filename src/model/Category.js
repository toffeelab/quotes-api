import Sequelize from "sequelize";
import sequelize from '@/utils/sequelize';

class Category extends Sequelize.Model {}
Category.init({

}, {
  sequelize
});

export default Category;