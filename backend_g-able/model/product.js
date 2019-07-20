module.exports = (sequelize, Sequelize) => {
  const product = sequelize.define(
    'product',
    {
      Id_product: {
        type: Sequelize.STRING,
        field: 'ID',
        primaryKey: true
      },
      Name_product: {
        type: Sequelize.STRING,
        field: 'NAME'
      },
      Detail_product: {
        type: Sequelize.STRING,
        field: 'DETAIL'
      },
      Price_product: {
        type: Sequelize.INTEGER,
        field: 'PRICE'
      },
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );
  return product;
};
