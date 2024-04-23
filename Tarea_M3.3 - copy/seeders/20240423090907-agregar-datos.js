'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Personas', [
      {
        nombre: 'John',
        apellidoPaterno: 'Doe',
        apellidoMaterno: 'Smith',
        correo: 'john.doe@example.com',
        imagen: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Jane',
        apellidoPaterno: 'Doe',
        apellidoMaterno: 'Smith',
        correo: 'jane.doe@example.com',
        imagen: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    await queryInterface.bulkInsert('Responsables', [
      {
        numeroEmpleado: '12345',
        activosCustodia: 'Computer, Laptop',
        imagen: null,
        personaId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numeroEmpleado: '54321',
        activosCustodia: 'Mobile, Tablet',
        imagen: null,
        personaId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    await queryInterface.bulkInsert('Direcciones', [
      {
        pais: 'Mexico',
        colonia: 'Centro',
        calle: 'Main Street',
        descripcion: 'Calle principal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pais: 'USA',
        colonia: 'Downtown',
        calle: 'Broadway',
        descripcion: 'Main street',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    await queryInterface.bulkInsert('Usuarios', [
      {
        numeroCuenta: 123456,
        contraseña: 'password',
        nombre: 'John',
        apellidoPaterno: 'Doe',
        apellidoMaterno: 'Smith',
        correo: 'john.doe@example.com',
        imagen: null,
        direccionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numeroCuenta: 654321,
        contraseña: 'password',
        nombre: 'Jane',
        apellidoPaterno: 'Doe',
        apellidoMaterno: 'Smith',
        correo: 'jane.doe@example.com',
        imagen: null,
        direccionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Personas', null, {});
    await queryInterface.bulkDelete('Responsables', null, {});
    await queryInterface.bulkDelete('Direcciones', null, {});
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
