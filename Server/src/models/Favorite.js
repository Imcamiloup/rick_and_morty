const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true,
       },
       name: {
         type: DataTypes.STRING,
         allowNull: false,
       },
       status: {
         type: DataTypes.STRING,
         allowNull: false,
       },
       species: {
         type: DataTypes.STRING,
         allowNull: false,
       },
       gender: {
         type: DataTypes.STRING,
         allowNull: false,
       },
   }, { timestamps: false });
};
