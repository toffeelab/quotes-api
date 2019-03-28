import Sequelize from "sequelize";
import sequelize from '@/utils/sequelize';
import Category from '@/model/Category';

class Quote extends Sequelize.Model {}
Quote.init({
  //  공개 여부
  isPublished: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  // QOD 진행 여부
  dailyDeployed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  isDailyQuote: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
}, {
  sequelize
});

// categoryId 생성 - 대표 카테고리
Quote.belongsTo(Category);
// Tag ID 생성 - 대표 카테고리 + 연관 카테고리
Quote.hasMany(Category, { as: 'Tags' });

export default Quote;