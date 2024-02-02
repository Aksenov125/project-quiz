"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const questionData = [
      {
        title: "Как называются эти скобки {}",
        answer: "бабарные",
        img: "https://www.shutterstock.com/shutterstock/photos/618891188/display_1500/stock-vector-quote-symbol-bracket-icon-vector-618891188.jpg",
        theme_id: 1,
      },
      {
        title: "1234",
        answer: "123",
        img: "https://www.shutterstock.com/shutterstock/photos/618891188/display_1500/stock-vector-quote-symbol-bracket-icon-vector-618891188.jpg",
        theme_id: 1,
      },
      {
        title: "12345356543",
        answer: "12336543453453",
        img: "https://www.shutterstock.com/shutterstock/photos/618891188/display_1500/stock-vector-quote-symbol-bracket-icon-vector-618891188.jpg",
        theme_id: 1,
      },
    ];
    const question = questionData.map((quest) => ({...quest, createdAt: new Date(), updatedAt: new Date()}))
    await queryInterface.bulkInsert('Questions', question)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions')
  },
};
