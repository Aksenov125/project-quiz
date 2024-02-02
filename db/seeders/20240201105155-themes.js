"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const themesData = [
      {
        title: "Горячие клавиши VSCode",
        img: "https://www.crio.do/blog/content/images/2021/05/Vscode-shortcuts.png",
      },
      {
        title: "Угадай бренд авто с закрытым логотипом",
        img: "https://avatars.mds.yandex.net/get-vertis-journal/3911415/12.jpg_1635618156782/845x845",
      },
    ];
    const themes = themesData.map((theme) => ({
      ...theme,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Themes", themes);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Themes");
  },
};
