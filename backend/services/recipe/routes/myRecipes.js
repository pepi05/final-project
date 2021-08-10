const express = require('express');
const router = express.Router();
const controller = require('../../../controllers/recipes')

router
      .get('/', controller.fetchAllRecipes)
      .get('/:id', controller.fetchOneRecipe)
      .put('/:id', controller.putUpdateRecipe)
      .delete('/:id', controller.deleteRecipe)

module.exports = router;