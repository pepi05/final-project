const express = require('express');
const router = express.Router();
const controller = require('../../../controllers/recipes');

router


      // .post('/', controller.createRecipe)
      // // .get('/', controller.fetchAllRecipes)
      // // .get('/:id', controller.fetchOneRecipe)
      // .put('/:id', controller.putUpdateRecipe)
      // .delete('/:id', controller.deleteRecipe)
      .patch('/:id/like', controller.likeRecipe)
      .get('/breakfast', controller.getBreakfast)
      .get('/brunch', controller.getBrunch)
      .get('/lunch', controller.getLunch)
      .get('/dinner', controller.getDinner)
      

module.exports = router;