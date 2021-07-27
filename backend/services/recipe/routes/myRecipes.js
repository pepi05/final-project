const express = require('express');
const router = express.Router();
const controller = require('../../../controllers/recipes')

router
      .get('/', controller.fetchAllRecipes)
      .get('/:id', controller.fetchOneRecipe)
      .post('/', controller.createRecipe)
      .put('/:id', controller.putUpdateRecipe)
      .delete('/:id', controller.deleteRecipe)

module.exports = router;