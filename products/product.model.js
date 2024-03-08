const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.NUMBER, allowNull: false},
        quantity: { type: DataTypes.NUMBER, allowNull: false},
        image: { type: DataTypes.STRING, allowNull: false}
    };

    return sequelize.define('', attributes);
}