'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Activos', [
      {
        numSerie: 123456,
        numInventario: 789,
        numInventarioUABC: 456,
        tipo: 'Computadora',
        descripcion: 'Computadora de escritorio',
        ubicacion: 'Oficina 101',
        responsable: 'John Doe',
        imagen: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numSerie: 987654,
        numInventario: 321,
        numInventarioUABC: 654,
        tipo: 'Teléfono',
        descripcion: 'Teléfono móvil',
        ubicacion: 'Oficina 102',
        responsable: 'Jane Smith',
        imagen: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    await queryInterface.bulkInsert('Tags', [
      {
        descripcion: 'Electrónica',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Oficina',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    await queryInterface.bulkInsert('ActivoTags', [
      {
        activoId: 1,
        tagId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        activoId: 1,
        tagId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        activoId: 2,
        tagId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        activoId: 2,
        tagId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

//   down: async (queryInterface, Sequelize) => {
//     // 删除添加的示例数据
//     await queryInterface.bulkDelete('Activos', null, {});
//     await queryInterface.bulkDelete('Tags', null, {});
//     await queryInterface.bulkDelete('ActivoTags', null, {});
//   }
};
