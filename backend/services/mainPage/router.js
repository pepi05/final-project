const express = require('express');
const router = express.Router();
const controller = require('../../controllers/mainPage');

router.get('/fresh', controller.fresh)
      .get('/popular', controller.popular)
      .get('/', controller.fetchAll)
      .get('/:id', controller.fetchOne)

module.exports = router;