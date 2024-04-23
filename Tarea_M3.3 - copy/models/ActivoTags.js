'use strict';
module.exports = (sequelize, DataTypes) => {
    const ActivoTags = sequelize.define('ActivoTags', {
        activoId: {
            allowNull: false,
            type: DataTypes.INTEGER 
        },
        tagId: {
            allowNull: false,
            type: DataTypes.INTEGER 
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

    ActivoTags.associate = function(models) {
    };

    return ActivoTags;
};
