
'use strict';

module.exports = (sequelize, DataTypes) => {
    const Direccion = sequelize.define('Direccion', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER 
        },
        pais: {
            type: DataTypes.STRING
        },
        colonia: {
            type: DataTypes.STRING
        },
        calle: {
            type: DataTypes.STRING
        },
        descripcion: {
            type: DataTypes.STRING
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {});

    Direccion.associate = function(models) {
        Direccion.hasMany(models.Usuario, {
            foreignKey: 'direccionId'
        });
    };

    return Direccion;
};
