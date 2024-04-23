'use strict';
module.exports = {
 up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('ActivoTags', {
     activoId: {
       type: Sequelize.INTEGER
     },
     tagId: {
       type: Sequelize.INTEGER
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
 down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('ActivoTags');
 }
};
