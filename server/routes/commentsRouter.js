const express = require('express');
const { Request, User, Favorite, Comments } = require('../db/models');

const commentsRouter = express.Router();

commentsRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await Comments.findAll({where: {userId: id}, include: {model: User}});
    console.log(JSON.parse(JSON.stringify(comments)))
    res.sendStatus(200)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = commentsRouter;
