import Sequelize from "sequelize";
import sequelize from '@/utils/sequelize';
import Category from '@/model/Category';
import Quote from "@/model/Quote";

class TranslatedQuote extends Sequelize.Model {}
TranslatedQuote.init({
  //  언어
  language: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  message: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  sequelize
});

// add quoteId to Translated Quote
TranslatedQuote.belongsTo(Quote);

export default TranslatedQuote;