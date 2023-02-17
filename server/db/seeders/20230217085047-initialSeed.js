const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashpassUser = await bcrypt.hash('1', 10);
    const hashpassAdmin = await bcrypt.hash('2', 10);
    const hashpassPartner = await bcrypt.hash('3', 10);
    const hashpassModer = await bcrypt.hash('4', 10);
    const hashpassPartner2 = await bcrypt.hash('5', 10);

    await queryInterface.bulkInsert(
      'Roles',
      [
        {
          rolename: 'user',
        },
        {
          rolename: 'admin',
        },
        {
          rolename: 'partner',
        },
        {
          rolename: 'moderator',
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          title: 'Мясо',
          photoPath:
            'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        },
        {
          title: 'Рыба',
          photoPath:
            'https://avatars.mds.yandex.net/i?id=054ae5cb21c8746f7f4955ff93dd6ecd-4292273-images-thumbs&n=13&exp=1',
        },
        {
          title: 'Морепродукты',
          photoPath:
            'https://avatars.mds.yandex.net/i?id=7a7248f97664dd82e80c33b9dfa2de63-5221515-images-thumbs&n=13&exp=1',
        },
        {
          title: 'Яйца',
          photoPath:
            'https://avatars.mds.yandex.net/i?id=488fb560a1f6dfcee980535198d35928-4960217-images-thumbs&n=13&exp=1',
        },
        // {
        //   title: 'Молоко',
        //   photoPath:
        //     'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        // },
        // {
        //   title: 'Соя',
        //   photoPath:
        //     'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        // },
        // {
        //   title: 'Зелень',
        //   photoPath:
        //     'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        // },
        // {
        //   title: 'Фрукты, ягоды',
        //   photoPath:
        //     'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        // },
        // {
        //   title: 'Грибы',
        //   photoPath:
        //     'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        // },
        // {
        //   title: 'Жиры, масла',
        //   photoPath:
        //     'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        // },
        // {
        //   title: 'Орехи, семена, крупы',
        //   photoPath:
        //     'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        // },
        // {
        //   title: 'Мучное',
        //   photoPath:
        //     'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        // },
        // {
        //   title: 'Сладости',
        //   photoPath:
        //     'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        // },
        // {
        //   title: 'Фастфуд',
        //   photoPath:
        //     'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        // },
        // {
        //   title: 'Напитки, соки',
        //   photoPath:
        //     'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        // },
        // {
        //   title: 'Другое',
        //   photoPath:
        //     'https://avatars.mds.yandex.net/i?id=15fbc5c393059d0887944886d01bde2d31f0f73b-8209530-images-thumbs&n=13&exp=1',
        // },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Statuses',
      [
        {
          title: 'processing',
        },
        {
          title: 'published',
        },
        {
          title: 'inactive',
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: '1@1',
          hashpass: hashpassUser,
          firstName: 'Никита',
          lastName: 'Басов',
          secondName: 'Дмитриевич',
          phone: '+79012324312',
          pathPhoto:
            'https://avatars.mds.yandex.net/i?id=5919bbf82c5cc8c65fef9d8ff06fc1e57f6d2f51-5303596-images-thumbs&n=13&exp=1',
          active: false,
          roleid: 1,
        },
        {
          email: '2@2',
          hashpass: hashpassAdmin,
          firstName: 'Елизавета',
          lastName: 'Иванова',
          secondName: 'Кирилловна',
          phone: '+79092567656',
          pathPhoto:
            'https://avatars.mds.yandex.net/i?id=da9227797632ac6eeacbf99de145c5f94fd0f544-8425275-images-thumbs&n=13&exp=1',
          active: false,
          roleid: 2,
        },
        {
          email: '3@3',
          hashpass: hashpassPartner,
          firstName: 'Степан',
          lastName: 'Тихонов',
          secondName: 'Дамирович',
          phone: '+79012324312',
          pathPhoto:
            'https://avatars.mds.yandex.net/i?id=0e294470b0599b048bd9dbb6569a4ad6e808f19d-8206800-images-thumbs&n=13&exp=1',
          alternativePhone: '+79013245678',
          companyName: 'ВкусВилл',
          titleLogoPath:
            'https://avatars.mds.yandex.net/i?id=7a5d5939f9159ffe25740f274fc328e2fc274426-8244093-images-thumbs&n=13&exp=1',
          active: false,
          description:
            'Российская розничная сеть супермаркетов и собственная торговая марка продуктов, позиционируемых как «продукты для здорового питания»',
          roleid: 3,
        },
        {
          email: '5@5',
          hashpass: hashpassPartner2,
          firstName: 'Антон',
          lastName: 'Балашов',
          secondName: 'Александрович',
          phone: '+79012324312',
          pathPhoto:
            'https://avatars.mds.yandex.net/i?id=55dfbbf4e0b932c8eed195a403a74ea3fcd2962e-8497168-images-thumbs&n=13&exp=1',
          alternativePhone: '+79013245678',
          companyName: 'У дома',
          titleLogoPath:
            'https://avatars.mds.yandex.net/i?id=639133271cfbf2454a67a5d626a4b223aa3ed251-8506348-images-thumbs&n=13&exp=1',
          active: false,
          description:
            'Концепция специализированных магазинов с заводским отделом Колбасы и Деликатесы, который дополняют отделы: Охлажденное мясо и Мясные полуфабрикаты, Молоко, Замороженные полуфабрикаты, Кондитерские изделия и Пекарня пользуется растущим спросом среди покупателей, не конкурирует с федеральными сетями, а дополняет их ассортимент.',
          roleid: 3,
        },
        {
          email: '4@4',
          hashpass: hashpassModer,
          firstName: 'Анастасия',
          lastName: 'Попова',
          secondName: 'Артемьевна',
          phone: '+79297865191',
          pathPhoto:
            'https://avatars.mds.yandex.net/i?id=c59299dd609e783d1a0b10071059a74014fb99ec-8174408-images-thumbs&n=13&exp=1',
          alternativePhone: '+79013245678',
          active: false,
          roleid: 4,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  },
};
