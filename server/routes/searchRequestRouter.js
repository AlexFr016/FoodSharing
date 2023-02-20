const express = require('express');
const { Op, Sequelize } = require('sequelize');
const { Request, Product, User, Category } = require('../db/models');

const searchRequestRouter = express.Router();

searchRequestRouter
  .route('/')
  .get(async (req, res) => {
    try {
      // console.log('AAAAAAAAAAAAAAAAAAAAAAAA');
      const allRequests = await Request.findAll({
        order: [['createdAt', 'DESC']],
        include: [
          {
            model: User,
            attributes: ['id', 'companyName'],
          },
          // {
          //   model: Product,
          //   attributes: ['id'],
          //   include: {
          //     model: Category,
          //     attributes: ['id', 'title'],
          //   },
          // },
        ],
      });

      res.json(allRequests);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    try {
      const { input } = req.body;

      const foundRequests = await Request.findAll({
        include: [
          {
            model: User,
            attributes: ['id', 'companyName'],
          },
          {
            model: Product,
            attributes: ['title'],

            where: {
              [Op.or]: [
                {
                  title: {
                    [Op.iLike]: `%${input}%`,
                  },
                },
                {
                  title: {
                    [Op.substring]: input,
                  },
                },
              ],
            },
            include: {
              model: Category,
              attributes: ['id', 'title'],
            },
          },
        ],
      });
      console.log(JSON.parse(JSON.stringify(foundRequests)));
      res.json(foundRequests);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }

    // const resa = foundRequest({ title: { [Op.substring]: input } });
  });

module.exports = searchRequestRouter;
