const express = require('express');
const router = express.Router();
const controller = require('../../controllers/upload');

router.post('/recipe-image', controller.uploadRecipeImage)
      .post('/avatar', controller.uploadUserAvatar)

module.exports = router;