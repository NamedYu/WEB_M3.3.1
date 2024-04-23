'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
 async up(queryInterface, Sequelize) {
   await queryInterface.createTable('Activos', {
     activoId: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER
     },
     numSerie: {
       type: Sequelize.INTEGER
     },
     numInventario: {
       type: Sequelize.INTEGER
     },
     numInventarioUABC: {
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.STRING
      },
     descripcion: {
       type: Sequelize.STRING
     },
     ubicacion: {
        type: Sequelize.STRING
      },
     responsable: {
       type: Sequelize.STRING
     },
     imagen: {
       type: Sequelize.BLOB
     },
     createdAt: {
       allowNull: false,
       type: Sequelize.DATE
     },
     updatedAt: {
       allowNull: false,
       type: Sequelize.DATE
     }
   })
 },
 down: (queryInterface, Sequelize) => {
  return queryInterface.dropTable('Activos');
}
}
