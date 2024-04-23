'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Personas', {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER 
      },
      nombre: {
          type: Sequelize.STRING
      },
      apellidoPaterno: {
          type: Sequelize.STRING
      },
      apellidoMaterno: {
          type: Sequelize.STRING
      },
      correo: {
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
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Personas');
  }
};
