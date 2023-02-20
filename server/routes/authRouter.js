const express = require('express');
const bcrypt = require('bcrypt');
const { User, Role } = require('../db/models');

const authRouter = express.Router();

authRouter.post('/', async (req, res) => {
  try {
    const { firstName, lastName, secondName, email, phone, pass } = req.body;
    console.log(firstName);
    const hashpass = await bcrypt.hash(pass, 10);
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        firstName,
        lastName,
        secondName,
        phone,
        hashpass,
        roleid: 1,
      },
    });
    if (!created) {
      res.sendStatus(401).send('Адрес электронной почты уже занят');
    }
    const newUser = JSON.parse(JSON.stringify(user));
    delete newUser.hashpass;
    req.session.user = newUser;
    res.json(newUser);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
authRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, secondName, email, phone, companyName } = req.body;
    const editUser = await User.findOne({ where: { id } });
    editUser.firstName = firstName;
    editUser.lastName = lastName;
    editUser.secondName = secondName;
    editUser.email = email;
    editUser.phone = phone;
    editUser.companyName = companyName;
    await editUser.save();
    res.json(editUser);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
authRouter.post('/auth', async (req, res) => {
  try {
    const { email, pass } = req.body;
    const foundUser = await User.findOne({ where: { email }, include: Role });
    if (!(foundUser && (await bcrypt.compare(pass, foundUser.hashpass)))) {
      res.sendStatus(401).send('Неправльно введен пароль');
    }
    const newUser = JSON.parse(JSON.stringify(foundUser));
    delete newUser.hashpass;
    req.session.user = newUser;
    res.json(newUser);
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
authRouter.get('/check', (req, res) => {
  try {
    if (req.session?.user?.id) {
      return res.json(req.session.user);
    }
    return res.sendStatus(401);
  } catch (error) {
    return res.sendStatus(500);
  }
});

module.exports = authRouter;
