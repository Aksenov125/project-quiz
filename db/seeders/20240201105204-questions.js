"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const questionData = [
      {
        title: "Как сместить табуляцию на один шаг влево?",
        answer: "shift tab",
        img: "https://habrastorage.org/getpro/habr/upload_files/ff7/159/b4e/ff7159b4e42e3e0077ae4dce96a46180.gif",
        theme_id: 1,
      },
      {
        title: "Как закомментировать или раскомментировать строку?",
        answer: "ctrl /",
        img: "https://habrastorage.org/getpro/habr/upload_files/378/2b8/b19/3782b8b19839beb9b839c52c02324047.gif",
        theme_id: 1,
      },
      {
        title: "Как удалить строку целиком?",
        answer: "shift del",
        img: "https://habrastorage.org/getpro/habr/upload_files/79b/348/98c/79b34898c8baf5e0495e5ec88970c5e5.gif",
        theme_id: 1,
      },
      {
        title: "Как переименовать переменную, на которой находится курсор?",
        answer: "F2",
        img: "https://habrastorage.org/getpro/habr/upload_files/a49/9b1/737/a499b1737bbbbbb870857077e151dec9.gif",
        theme_id: 1,
      },
      {
        title: "Как выделить слово, на котором находится курсор?",
        answer: "ctrl d",
        img: "https://habrastorage.org/getpro/habr/upload_files/75a/074/56d/75a07456def328e86361306438c0af05.gif",
        theme_id: 1,
      },
      {
        title: "Как выделить строку целиком?",
        answer: "ctrl l",
        img: "https://habrastorage.org/getpro/habr/upload_files/4df/3e3/99f/4df3e399fbb96aa3f47a9218268f5c8c.gif",
        theme_id: 1,
      }, 
      {
        title: "Чей бренд закрыт массивной наклейкой?",
        answer: "BMW",
        img: "https://avatars.mds.yandex.net/get-vertis-journal/4080458/1.jpg_1635614438119/845x845",
        theme_id: 2,
      },
      {
        title: "Узнали производителя?",
        answer: "KIA",
        img: "https://avatars.mds.yandex.net/get-vertis-journal/4465444/2.jpg_1635614475414/845x845",
        theme_id: 2,
      },   
      {
        title: "Возможно, вам знаком этот хэтчбек. Но нас интересует лишь марка.",
        answer: "Honda",
        img: "https://avatars.mds.yandex.net/get-vertis-journal/4465444/3.jpg_1635614760824/845x845",
        theme_id: 2,
      },   
      {
        title: "Модель шведского (кажется) бренда. Не так ли?",
        answer: "Volvo",
        img: "https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/pdp/xc60-fuel/xc60-og.jpg?h=630&iar=0&w=1200",
        theme_id: 2,
      },   
      {
        title: "Вот модель поменьше. Узнали, чей это хэтч?",
        answer: "Peugeot",
        img: "https://avatars.mds.yandex.net/get-vertis-journal/4466156/5.jpg_1635615744639/845x845",
        theme_id: 2,
      },   
      {
        title: "Как насчёт этого седана? В России модель неизвестна, но возможно, вы узнали марку…",
        answer: "Geely",
        img: "https://avatars.mds.yandex.net/get-vertis-journal/3911415/7.jpg_1635616226986/845x845",
        theme_id: 2,
      },   
             
    ];
    const question = questionData.map((quest) => ({...quest, createdAt: new Date(), updatedAt: new Date()}))
    await queryInterface.bulkInsert('Questions', question)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions')
  },
};
