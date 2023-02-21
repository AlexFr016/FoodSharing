const express = require('express');
const { Request, User, Favorite, Comment } = require('../db/models');

const commentsRouter = express.Router();

commentsRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const comments = await Comment.findAll({ where: { userid: id }, include: { model: User } });
    const prettyComments = JSON.parse(JSON.stringify(comments));
    res.json(prettyComments).sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

commentsRouter.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { body, authorid } = req.body;
    console.log(id);
    const comment = await Comment.create({ where: { authorid, body, userid: id } });
    const prettyComment = JSON.parse(JSON.stringify(comment));
    res.json(prettyComment).sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = commentsRouter;
