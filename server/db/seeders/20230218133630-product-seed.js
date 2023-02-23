/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          title: 'Мясо на косточке куриное, охлажденное',
          price: 309,
          photoPath: '',
          count: 5,
          description:
            'Свежее, нежное куриное мясо на косточке, без кожицы. Идеально для запекания целиком с овощами и травами и приготовления сытных наваристых супов. Мясо также можно замариновать и поджарить на гриле, нафаршировать, потушить в сливках или использовать для жаркого.',
          categoryid: 1,
          requestid: 1,
        },
        {
          title: 'Хумус «Иерусалимский»',
          price: 178,
          photoPath: '',
          count: 7,
          description:
            'Традиционная израильская закуска из перетёртого нута. Обладает бархатистой однородной консистенцией, которая отлично подходит для намазывания на хлеб. Вкус мягкий, с ореховыми оттенками, нотами пикантных специй и вяленого сладкого перца.',
          categoryid: 17,
          requestid: 1,
        },
        {
          title: 'Горбуша слабосоленая ломтики, 100 г',
          price: 165,
          photoPath: '',
          count: 15,
          description:
            'Горбуша — аппетитная нежная рыба из семейства лососёвых. Вкус у неё такой же богатый, как и у других представителей семейства, при этом жирность и калорийность несколько ниже. В составе этого продукта ничего лишнего: только горбуша и соль. Рыбные ломтики можно подать на стол в качестве самостоятельной закуски, использовать для приготовления салатов и бутербродов. А ещё это просто идеальный продукт для вкусных и питательных завтраков.',
          categoryid: 2,
          requestid: 1,
        },
        {
          title: 'Форель малосоленая ломтики, 150 г',
          price: 398,
          photoPath: '',
          count: 9,
          description:
            'Форель – рыба семейства лососевых. Красное мясо форели богато легкоусвояемыми белками. Найти дикую форель практически невозможно, так как этот вид занесен в красную книгу. Но эту рыбу очень любят за вкуснейшее красное мясо. Наша форель выращена без антибиотиков и гормонов роста. Рыбу не подкрашивают, а насыщенный оранжево-красный цвет мясу придают каротиноиды, входящие в состав корма.',
          categoryid: 2,
          requestid: 2,
        },
        {
          title: 'Семга слабосоленая ломтики, 100 г',
          price: 338,
          photoPath: '',
          count: 17,
          description:
            'В составе этого продукта ничего лишнего: только сёмга и соль. Аппетитные рыбные ломтики можно подать на стол в качестве самостоятельной закуски, использовать для приготовления салатов и бутербродов. А ещё это просто идеальный продукт для вкусных и питательных завтраков. Например, советуем начинить сёмгой овсяноблин, подать рыбу в сопровождении яйца-пашот или с кабачковыми оладьями и творожным сыром.',
          categoryid: 2,
          requestid: 3,
        },

        {
          title: 'Яйцо куриное С0',
          price: 120,
          photoPath: '',
          count: 10,
          description:
            'Куриные яйца категории С0 это достаточно крупные отборные яйца весом от 65 до 74,9 г. Мы отбираем надежных производителей, где к питанию птиц предъявляются высокие требования – преимущественно зерновой откорм, никаких антибиотиков и гормонов роста. В упаковке 1 десяток. Упаковка может быть из разного материала в зависимости от поставщика. Яйца несут куры разных пород, в связи с чем они могут быть различного цвета, как белые, так и светло-коричневые.',
          categoryid: 4,
          requestid: 1,
        },
        {
          title: 'Яйцо куриное С2',
          price: 80,
          photoPath: '',
          count: 4,
          description:
            'Куриные яйца категории С2 это яйца весом от 45 до 54,9 г. Небольшой размер яиц этой категории очень удобен для приготовления маленьких порций сырников, оладий и другой выпечки. Мы отбираем надежных производителей, где к питанию птиц предъявляются высокие требования – преимущественно зерновой откорм, никаких антибиотиков и гормонов роста. В упаковке 1 десяток. Яйца несут куры разных пород, в связи с чем они могут быть различного цвета, как белые, так и светло-коричневые.',
          categoryid: 4,
          requestid: 3,
        },
        {
          title: 'Мандарины',
          price: 157,
          photoPath: '',
          count: 20,
          description:
            'Мандарины любят многие, ведь они дарят ощущение ностальгии по детству. Без их вкуса и аромата просто не существует новогоднего стола и праздничного настроения! Эти маленькие цитрусы имеют сочную мякоть и искристый кисло-сладкий вкус. Разделить такой фрукт с кем-то приятным – что может быть лучше! А еще с мандарином можно смело экспериментировать в кулинарии. Попробуйте приготовить лёгкий салат, добавив к мандарину камамбер и руколу.',
          categoryid: 8,
          requestid: 2,
        },
        {
          title: 'Бананы',
          price: 108,
          photoPath: '',
          count: 13,
          description:
            'Банан настолько популярный и любимый многими фрукт, что не нуждается в представлении! Яркий жёлтый цвет, нежная сладкая мякоть и насыщенный аромат делают его безусловным фаворитом среди взрослых и детей. Свежий банан очень питательный, поэтому помогает быстро утолить голод. Съесть его можно на ходу, не запачкав руки, ведь банан очень удобно чистить. Этот фрукт широко применяются в кулинарии. Без них не было бы детского питания, нежных панкейков, творожков, йогуртов и мюсли. Купите бананы с бесплатной доставкой на дом или заберите сами из ближайшего магазина ВкусВилл.',
          categoryid: 8,
          requestid: 4,
        },
        {
          title: 'Халва подсолнечная',
          price: 135,
          photoPath: '',
          count: 8,
          description:
            'Наш производитель готовит халву из отборных, предварительно промытых, тщательно очищенных и обжаренных семян подсолнечника. Для получения «халвина», из которого и делают халву, семена подсолнечника перетирают на жерновах без отжима масла. Для того чтобы у халвы получилась волокнистая консистенция, вымешивают ее только вручную по специальной турецкой технологии. Специалисты производства обучались этой технологии за рубежом. Чем уникально: - приготовлена на фруктозе, без добавления сахара; - ручное вымешивание.',
          categoryid: 13,
          requestid: 5,
        },
        {
          title: 'Миндаль жареный, 100 г',
          price: 135,
          photoPath: '',
          count: 5,
          description:
            'Миндаль богат клетчаткой и имеет низкий гликемический индекс. А по содержанию белка его можно сравнить с постным мясом. Миндаль поможет быстро утолить голод. Его сладковатый вкус нравится и взрослым, и детям. А ещё миндаль активно используется для приготовления десертов.',
          categoryid: 11,
          requestid: 5,
        },
        {
          title: 'Сок яблочный, 3 л',
          price: 367,
          photoPath: '',
          count: 4,
          description:
            'Сырьем для изготовления сока служат свежие плоды, поэтому у сока яркий, насыщенный вкус и аромат. Производитель преимущественно собирает яблоки в собственных садах на территории России и Республики Беларусь. Изготавливают сок способом прямого отжима, также в процессе производства используется щадящая пастеризация, которая позволяет по максимуму сохранить витамины и сделать сок на сто процентов безопасным. В яблочном соке содержится много клетчатки, потому он полезен для ЖКТ, так как нормализует в нем все процессы и улучшает работу в целом. Также яблоки богаты железом, потому такой сок рекомендуют при анемии и авитаминозе. Яблочный сок особенно полезен для женщин, в нем содержится фолиевая кислота. Она укрепляет ногти и волосы, помогает поддерживать их красоту и здоровье.',
          categoryid: 15,
          requestid: 5,
        },
        {
          title: 'Салат Рестория Шеф селедка под шубой 250г',
          price: 230,
          photoPath: '',
          count: 3,
          description:
            'Состав: сельдь с/с (филе сельди атлантической, соль, сахар, специи), майонез (масло подсолнечное, вода, яичный желток, сахар, соль поваренная, загустители: Е1422, Е415, Е412, регуляторы кислотности: уксусная кислота, молочная кислота, консервант Е202, ароматизатор "Горчица", антиокислитель Е385, краситель бета-каротин (Е160а)), морковь, свекла, картофель, яйцо куриное, соль поваренная пищевая',
          categoryid: 7,
          requestid: 6,
        },
        {
          title: 'Мучная смесь Аладушкин Блины Царские 800 г',
          price: 105,
          photoPath: '',
          count: 12,
          description:
            'Смесь мучная «Блины Царские» позволит без усилий приготовить румяные вкусные блинчики, которые одинаково хорошо сочетаются с солеными и сладкими начинками. В состав смеси уже включены все необходимые компоненты, что существенно облегчает процесс приготовления теста. Экономичная упаковка рассчитана на несколько применений, что позволит не один раз побаловать всю семью любимым лакомством. С мучной смесью «Блины Царские» всегда гарантирован отличный результат готового блюда при минимальных затратах!',
          categoryid: 12,
          requestid: 3,
        },
        {
          title: 'Хумус «Иерусалимский»',
          price: 178,
          photoPath: '',
          count: 7,
          description:
            'Традиционная израильская закуска из перетёртого нута. Обладает бархатистой однородной консистенцией, которая отлично подходит для намазывания на хлеб. Вкус мягкий, с ореховыми оттенками, нотами пикантных специй и вяленого сладкого перца.',
          categoryid: 17,
          requestid: 3,
        },
        {
          title: 'Бананы',
          price: 0,
          photoPath: '',
          count: 13,
          description:
            'Банан настолько популярный и любимый многими фрукт, что не нуждается в представлении! Яркий жёлтый цвет, нежная сладкая мякоть и насыщенный аромат делают его безусловным фаворитом среди взрослых и детей. Свежий банан очень питательный, поэтому помогает быстро утолить голод. Съесть его можно на ходу, не запачкав руки, ведь банан очень удобно чистить. Этот фрукт широко применяются в кулинарии. Без них не было бы детского питания, нежных панкейков, творожков, йогуртов и мюсли.',
          categoryid: 8,
          requestid: 7,
        },
        {
          title: 'Ананас спелый',
          price: 0,
          photoPath: '',
          count: 4,
          description:
            'Мы отобрали самые спелые ананасы, чтобы вы не тратили на выбор ни одной лишней минуты! Плоды порадуют сахарно-сладким вкусом с приятной кислинкой и невысокой калорийностью. На кухне ананасам всегда найдётся применение: их можно нарезать кольцами и подать в свежем виде, добавить в смузи, кашу или использовать для декора блюд. ',
          categoryid: 8,
          requestid: 7,
        },

        {
          title: 'Батон нарезной, половинка',
          price: 37,
          photoPath: '',
          count: 7,
          description:
            'Мягкий, ароматный батон из белой пшеничной муки, в ностальгическом формате «половинка». Нарезан на ломти идеальной толщины. Замечательно подходит для тостов, румяных гренков, и разнообразных сэндвичей.',
          categoryid: 12,
          requestid: 8,
        },
        {
          title: 'Бекон сырокопченый, нарезка',
          price: 192,
          photoPath: '',
          count: 3,
          description:
            'Тонкие ломтики сырокопчёной грудинки, слега приправленные солью. Обладают нежной текстурой и приятным ароматом копчения. Бекон традиционно используется для приготовления основных блюд, сытных завтраков и итальянской пасты.',
          categoryid: 1,
          requestid: 9,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Favorites',
      [
        {
          userid: 6,
          requestid: 7,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
    await queryInterface.bulkDelete('Favorites', null, {});
  },
};
