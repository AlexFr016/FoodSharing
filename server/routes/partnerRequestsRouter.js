const express = require('express');
const { Request } = require('../db/models');

const partnerRequestsRouter = express.Router();

partnerRequestsRouter.get('/', async (req, res) => {
  try {
    const partnerRequests = await Request.findAll({ where: { partnerId: req.session.user.id } });
    res.json(partnerRequests);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = partnerRequestsRouter;
