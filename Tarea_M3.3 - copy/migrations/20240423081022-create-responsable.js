'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Responsables', {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER 
      },
      numeroEmpleado: {
          type: Sequelize.STRING
      },
      activosCustodia: {
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
      },
      personaId: {
          type: Sequelize.INTEGER, // Esta columna se usará como clave foránea
          references: {
              model: 'Personas',
              key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
      }
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Responsables');
  }
};
