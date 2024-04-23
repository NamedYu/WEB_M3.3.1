'use strict';

module.exports = (sequelize, DataTypes) => {
    const Activo = sequelize.define('Activo', {
        activoId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER 
        },
        numSerie: {
            type: DataTypes.INTEGER
        },
        numInventario: {
            type: DataTypes.INTEGER
        },
        numInventarioUABC: {
            type: DataTypes.INTEGER
        },
        tipo: {
            type: DataTypes.STRING
        },
        descripcion: {
            type: DataTypes.STRING
        },
        ubicacion: {
            type: DataTypes.STRING
        },
        responsable: {
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

    Activo.associate = function(models) {
        Activo.belongsToMany(models.Tag, {
            through: models.ActivoTags, 
            foreignKey: 'activoId' 
            
        });
    };

    return Activo;
};
