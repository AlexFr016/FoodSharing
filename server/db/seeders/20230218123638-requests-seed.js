/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Requests',
      [
        {
          title: 'Название 1',
          lifeTimeStart: '2023-02-18 15:29:28.000 +0300',
          lifeTimeEnd: '2023-02-18 15:29:28.000 +0300',
          address: 'адресс места выдачи товаров',
          contactPhone: '9012343453',
          contactName: 'Алина-Малинка',
          description: 'Описане заявки и товаров в ней',
          partnerid: 3,
          statusid: 1,
        },
        {
          title: 'Название 2',
          lifeTimeStart: '2023-02-18 15:29:28.000 +0300',
          lifeTimeEnd: '2023-02-18 15:29:28.000 +0300',
          address: 'адресс места выдачи товаров',
          contactPhone: '9012343453',
          contactName: 'Алина-Малинка',
          description: 'Описане заявки и товаров в ней',
          partnerid: 3,
          statusid: 1,
        },
        {
          title: 'Название 3',
          lifeTimeStart: '2023-02-18 15:29:28.000 +0300',
          lifeTimeEnd: '2023-02-18 15:29:28.000 +0300',
          address: 'адресс места выдачи товаров',
          contactPhone: '9012343453',
          contactName: 'Алина-Малинка',
          description: 'Описане заявки и товаров в ней',
          partnerid: 3,
          statusid: 1,
        },
        {
          title: 'Название 4',
          lifeTimeStart: '2023-02-18 15:29:28.000 +0300',
          lifeTimeEnd: '2023-02-18 15:29:28.000 +0300',
          address: 'адресс места выдачи товаров',
          contactPhone: '9012343453',
          contactName: 'Алина-Малинка',
          description: 'Описане заявки и товаров в ней',
          partnerid: 3,
          statusid: 1,
        },
        {
          title: 'Название 5',
          lifeTimeStart: '2023-02-18 15:29:28.000 +0300',
          lifeTimeEnd: '2023-02-18 15:29:28.000 +0300',
          address: 'адресс места выдачи товаров',
          contactPhone: '9012343453',
          contactName: 'Алина-Малинка',
          description: 'Описане заявки и товаров в ней',
          partnerid: 3,
          statusid: 1,
        },
        {
          title: 'Название 6',
          lifeTimeStart: '2023-02-18 15:29:28.000 +0300',
          lifeTimeEnd: '2023-02-18 15:29:28.000 +0300',
          address: 'адресс места выдачи товаров',
          contactPhone: '9012343453',
          contactName: 'Алина-Малинка',
          description: 'Описане заявки и товаров в ней',
          partnerid: 3,
          statusid: 1,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Requests', null, {});
  },
};
