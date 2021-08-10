const express = require('express');
const router = express.Router();
const controller = require('../../../controllers/recipes');

router
      .post('/', controller.createRecipe)
      .get('/', controller.fetchAllRecipes)
      .delete('/:id', controller.deleteRecipe)
      .patch('/:id/like', controller.likeRecipe)
      .patch('/:id/dislike', controller.dislikeRecipe)
      .get('/breakfast', controller.getBreakfast)
      .get('/brunch', controller.getBrunch)
      .get('/lunch', controller.getLunch)
      .get('/dinner', controller.getDinner)
      
module.exports = router;