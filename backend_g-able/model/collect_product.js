module.exports = (sequelize, Sequelize) => {
  const collect_product = sequelize.define(
    'collect_product',
    {
      Collect_id: {
        type: Sequelize.STRING,
        field: 'COLLECT_CODE',
        primaryKey: true
      },
      Product_id: {
        type: Sequelize.STRING,
        field: 'PRODUCT_ID'
      },
      Branch_id: {
        type: Sequelize.STRING,
        field: 'BRANCH_ID'
      },
      Quantity: {
        type: Sequelize.INTEGER,
        field: 'QUANTITY'
      },
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );
  return collect_product;
};
