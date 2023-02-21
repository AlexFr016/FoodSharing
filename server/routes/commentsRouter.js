const express = require('express');
const { Request, User, Favorite, Comment } = require('../db/models');

const commentsRouter = express.Router();

commentsRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await User.findAll({ where: { id }, include: 'UserComments' });
    const prettyComments = JSON.parse(JSON.stringify(comments[0].UserComments));
    console.log(prettyComments);
    res.json(prettyComments);
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
    res.json(prettyComment);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = commentsRouter;
