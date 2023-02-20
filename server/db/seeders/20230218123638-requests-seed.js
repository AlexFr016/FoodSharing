/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Requests',
      [
        {
          title: 'Продукты от ВкусВилл на Автозаводской',
          lifeTimeStart: '2023-02-18 15:29:28.000 +0300',
          lifeTimeEnd: '2023-02-18 15:29:28.000 +0300',
          address: 'Москва, пр. Автозаводская, 20',
          contactPhone: '9012343453',
          contactName: 'Мельникова Ева',
          description:
            'Сегодня наша задача – успеть раздать продукты до истечения срока годности и распределить между теми, кто в них нуждается.',
          partnerid: 3,
          statusid: 1,
        },
        {
          title: 'Скидки от ВкусВилл на ул. Косиора',
          lifeTimeStart: '2023-02-18 15:29:28.000 +0300',
          lifeTimeEnd: '2023-02-18 15:29:28.000 +0300',
          address: 'Москва, спуск Косиора, 83',
          contactPhone: '9012343453',
          contactName: 'Соловьева Антонина Ивановна',
          description: 'Приходите, всех ждем. Невероятно большие скидки в честь 23 февраля!!!',
          partnerid: 3,
          statusid: 1,
        },
        {
          title: 'Перекресток продукты',
          lifeTimeStart: '2023-02-18 15:29:28.000 +0300',
          lifeTimeEnd: '2023-02-18 15:29:28.000 +0300',
          address: 'Москва, город Истра, проезд Космонавтов, 39',
          contactPhone: '9012343453',
          contactName: 'Виктор',
          description:
            'Сегодня и завтра в магизине Перекресток на Космонавтов 39 (у входа со двора) будет раздача продуктов.',
          partnerid: 4,
          statusid: 1,
        },
        {
          title: 'скидочные продукты от магазина Перекресток',
          lifeTimeStart: '2023-02-18 15:29:28.000 +0300',
          lifeTimeEnd: '2023-02-18 15:29:28.000 +0300',
          address: 'Павловский Посад, пр. Бухарестская, 14',
          contactPhone: '9012343453',
          contactName: 'Белов Артём',
          description:
            'Мы спасаем еду от мусорного полигона, куда она обычно направляется после истечения срока годности.',
          partnerid: 4,
          statusid: 1,
        },
        {
          title: 'раздача продуктов',
          lifeTimeStart: '2023-02-18 15:29:28.000 +0300',
          lifeTimeEnd: '2023-02-18 15:29:28.000 +0300',
          address: 'Москва, Истра, ул. Балканская, 99',
          contactPhone: '9012343453',
          contactName: 'Покровская Анна',
          description: 'сегодня с 15:00 до 20:00 большая скидка на целый ряд позиций',
          partnerid: 3,
          statusid: 1,
        },
        {
          title: 'раздача продуктов: Хумус, Сыры',
          lifeTimeStart: '2023-02-18 15:29:28.000 +0300',
          lifeTimeEnd: '2023-02-18 15:29:28.000 +0300',
          address: 'Москва,  проезд Ладыгина, 2',
          contactPhone: '9012343453',
          contactName: 'Ушакова Мария Аркадьевна',
          description:
            'Друзья, всех привествую! в точке ВкусВилл на Ладыгина сегодня в 19:00 можно будет приобрести фрукты по минимальной цене. Всех ждем! Хорошего дня!',
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
