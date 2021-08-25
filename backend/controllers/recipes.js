const Recipe = require('../models/recipe');
const successResponse = require('../lib/responses/successResponse');
const errorResponse = require('../lib/responses/errorResponse');

module.exports = {
    createRecipe: async (req, res) => {
        try {
            const recipe = await Recipe.create({
              ...req.body,
              user: req.user.id
            });
            res.status(201).json({message: "recipe is created", recipe});
          } catch (error) {
            res.status(500).json(error)
          }
    },
    fetchAllRecipes: async (req, res) => {
        try {
            const recipes = await Recipe.find();
            successResponse(res, 'Recipes list', recipes);
        } catch (error) {
            errorResponse(res, 500, error);
        }   
    },
    fetchOneRecipe: async (req, res) => {
        try {
            const recipe = await Recipe.findById(req.params.id);
            successResponse(res, 'Recipe is fetched', recipe)  
        } catch (error) {
            errorResponse(res, 500, error);
        }   
    },
    putUpdateRecipe: async (req, res) => {
        try {
         await  Recipe.findOneAndReplace({ _id: req.params.id }, req.body);
            successResponse(res, `Recipe with id ${req.params.id} is successfully updated`); 
        } catch (error) {
            errorResponse(res, 500, error);
        } 
    },
    deleteRecipe: async (req, res) => {
        try {
            await  Recipe.findByIdAndDelete(req.params.id);
            successResponse(res, 'Recipe is successfully deleted'); 
        } catch (error) {
            errorResponse(res, 500, error);
        }
    },
    likeRecipe: async (req, res) => {
        try {
            const recipe = await Recipe.findById(req.params.id);
            const likedRecipe = await Recipe.findByIdAndUpdate(req.params.id, { likes: recipe.likes + 1 }, { new: true });
            successResponse(res, `recipe with id ${req.params.id} is liked`, likedRecipe);
        } catch (error) {
            errorResponse(res, 500, error);
        }
    },
    dislikeRecipe: async (req, res) => {
        try {
            const recipe = await Recipe.findById(req.params.id);
            const dislikedRecipe = await Recipe.findByIdAndUpdate(req.params.id, { likes: recipe.likes -1 }, { new: true });
            successResponse(res, `recipe with id ${req.params.id} is disliked`, dislikedRecipe)
        } catch (error) {
            errorResponse(res, 500, error)
        }
        
    },
    getBreakfast: async (req, res) => {
        try {
            const recipes = await Recipe.find({
                category: 'breakfast'
            });
            res.send(recipes);
        } catch (error) {
            errorResponse(res, 500, error);
        }
       
    },
    getBrunch: async (req, res) => {
        try {
            const recipes = await Recipe.find({
                category: 'brunch'
            });
            res.send(recipes);
        } catch (error) {
            errorResponse(res, 500, error);
        }
        
    },
    getLunch: async (req, res) => {
        try {
            const recipes = await Recipe.find({
                category: 'lunch'
            });
            res.send(recipes);
        } catch (error) {
            errorResponse(res, 500, error);
        }
    },
    getDinner: async (req, res) => {
        try {
            const recipes = await Recipe.find({
                category: 'dinner'
            });
            res.send(recipes);
        } catch (error) {
            errorResponse(res, 500, error)
        }
    }
}
