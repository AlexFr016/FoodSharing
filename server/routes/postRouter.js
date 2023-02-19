const express = require('express');
// const bcrypt = require('bcrypt');
const { Request, Product } = require('../db/models');
const upload = require('../middlewares/multer');
const parse = require('../middlewares/parse');

const postRouter = express.Router();

postRouter.post('/create', async (req, res) => {
  try {
    const { input } = req.body;
    input.partnerid = req.session.user.id;
    input.statusid = 1;
    console.log(input);
    const newPost = await Request.create(input);
    res.json(newPost);
  } catch (error) {
    console.log(error);
  }
});

postRouter.post('/newproduct/:id', upload.single('productName'), async (req, res) => {
  try {
    const { id: requestid } = req.params;
    const img = req?.file?.filename;
    console.log({ requestid });
    const newProduct = [];
    // const data = []
    parse(img).forEach((el) => {
      const data = el.data.map((obj) => ({ ...obj, requestid: Number(requestid) }));
      newProduct.push(...data);
      console.log({ el, data, newProduct });
    });
    // eslint-disable-next-line no-restricted-syntax, no-undef
    for await (product of newProduct) {
      // eslint-disable-next-line no-undef
      Product.create(product);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = postRouter;
