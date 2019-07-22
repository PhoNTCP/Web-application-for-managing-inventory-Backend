module.exports = (sequelize, Sequelize) => {
  const branch = sequelize.define(
    'branch',
    {
      Branch_id: {
        type: Sequelize.STRING,
        field: 'ID',
        primaryKey: true
      },
      Branch_Name: {
        type: Sequelize.STRING,
        field: 'BRANCH_NAME'
      },
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );
  return branch;
};
