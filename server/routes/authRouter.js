const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const authRouter = express.Router();

authRouter.post('/', async (req, res) => {
  try {
    const { firstName, lastName, secondName, login, email, phone, pass } = req.body;
    const hashpass = await bcrypt.hash(pass, 10);
    const [user, created] = await User.findOrCreate({
      firstName,
      lastName,
      secondName,
      login,
      email,
      phone,
      hashpass,
    });
    if (!created) {
      res.sendStatus(401).send('Адрес электронной почты уже занят');
    }
    req.session.user = user;
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
authRouter.get('/auth', async (req, res) => {
  try {
    const { email, pass } = req.body;
    const foundUser = await User.findOne({ where: { email } });
    if (!(foundUser && (await bcrypt.compare(pass, foundUser.hashpass)))) {
      res.sendStatus(401).send('Неправльно введен пароль');
    }
    const user = JSON.parse(JSON.stringify(foundUser));
    delete user.pass;
    req.session.user = user;
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
authRouter.get('/logout', (req, res) => {
  try {
    res.clearCookie('user_sid');
    req.session.destroy();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = authRouter;
