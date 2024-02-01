"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const themesData = [
      {
        title: "BabatdScript",
        img: "https://img.freepik.com/premium-vector/bs-letter-logo-design-vector-template-gold-and-black-letter-bs-logo-design_513639-796.jpg",
      },
    ];
    const themes = themesData.map((theme) => ({...theme, createdAt: new Date(), updatedAt: new Date()}))
    await queryInterface.bulkInsert('Themes', themes)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes')
  },
};
