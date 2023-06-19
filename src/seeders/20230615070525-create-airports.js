'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports', [
      { name: 'Indira Gandhi International Airport', address: 'Palam, Delhi, India' , cityId:"11" ,createdAt: new Date() , updatedAt: new Date() },
      { name: 'Chhatrapati Shivaji Maharaj International Airport', address: 'Mumbai, Maharashtra, India' , cityId:"15" ,createdAt: new Date() , updatedAt: new Date() },
      { name: 'Rajiv Gandhi International Airport, Hyderabad', address: 'Hyderabad, Telangana' , cityId:"14" ,createdAt: new Date() , updatedAt: new Date() },
      { name: 'Surat International Airport', address: 'Surat - Dumas Rd, Gaviyer, Surat, Gujarat 395007' , cityId:"12" ,createdAt: new Date() , updatedAt: new Date() },
    ], {});
  },
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
