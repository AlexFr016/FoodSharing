const express = require('express');
const { Op, Sequelize } = require('sequelize');
const { Request, Product, User } = require('../db/models');

const apiFavoritesRouter = express.Router();

apiFavoritesRouter.route('/').get(async (req, res) => {
  try {
    const allRequests = await Request.findAll({
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: User,
          attributes: ['companyName'],
        },
      ],
    });
    console.log(allRequests);
    res.json(allRequests);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// searchRequestRouter.post('/', async (req, res) => {
//   const { input } = req.body;

//   const foundRequests = await Request.findAll({
//     include: [
//       {
//         model: Product,
//         attributes: ['title'],
//         where: {
//           [Op.or]: [
//             {
//               title: {
//                 [Op.iLike]: `%${input}%`,
//               },
//             },
//             {
//               title: {
//                 [Op.substring]: input,
//               },
//             },
//           ],
//         },
//       },

//     ],
//   });

// const resa = foundRequest ({ title: { [Op.substring]: input } });
//   console.log(foundRequests);
//   res.json(foundRequests);
// });

module.exports = apiFavoritesRouter;
