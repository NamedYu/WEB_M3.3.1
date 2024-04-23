// persona.js

'use strict';

module.exports = (sequelize, DataTypes) => {
    const Persona = sequelize.define('Persona', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER 
        },
        nombre: {
            type: DataTypes.STRING
        },
        apellidoPaterno: {
            type: DataTypes.STRING
        },
        apellidoMaterno: {
            type: DataTypes.STRING
        },
        correo: {
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

    Persona.associate = function(models) {
        Persona.belongsTo(models.Responsable, {
            foreignKey: 'personaId' 
        });
    };

    return Persona;
};

