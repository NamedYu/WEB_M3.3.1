// responsable.js

'use strict';

module.exports = (sequelize, DataTypes) => {
    const Responsable = sequelize.define('Responsable', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER 
        },
        numeroEmpleado: {
            type: DataTypes.STRING
        },
        activosCustodia: {
            type: DataTypes.STRING
        },
        imagen: {
            type: DataTypes.BLOB
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

    Responsable.associate = function(models) {
        Responsable.hasOne(models.Persona, {
            foreignKey: 'personaId'
        });
    };

    return Responsable;
};
