
'use strict';

module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER 
        },
        numeroCuenta:{
            type: DataTypes.INTEGER
        },
        contraseña: {
            type: DataTypes.STRING
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

    Usuario.associate = function(models) {
        Usuario.belongsTo(models.Direccion, {
            foreignKey: 'direccionId' 
        });
    };

    return Usuario;
};
