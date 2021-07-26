const Recipe = require('../models/recipe');
const successResponse = require('../lib/responses/successResponse');
const errorResponse = require('../lib/responses/errorResponse');

module.exports = {
    createRecipe: async (req, res) => {
        try {
            const newRecipe = await Recipe.create({...req.body, user: req.user.id });
            successResponse(res, 'Recipe is successfully created', newRecipe);  
        } catch (error) {
            errorResponse(res, 500, error);
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
            successResponse(res, `recipe with id ${req.params.id} is liked`);
        } catch (error) {
            errorResponse(res, 500, error);
        }
    },

    getBreakfast: async (req, res) => {
        try {
            const recipes = await Recipe.find({
                category: 'breakfast'
            });
            res.send(recipes);
            // successResponse(res, 'Recipes list', recipes);
        } catch (error) {
            errorResponse(res, 500, error);
        }
       
    },
    getBrunch: async (req, res) => {
        try {
            const recipes = await Recipe.find({
                category: 'brunch'
            });
            // successResponse(res, 'brunch recipes', recipes);
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
            // successResponse(res, 'lunch recipes', recipes); 
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
            // successResponse(res, 'dinner recipes', recipes); 
            res.send(recipes);
        } catch (error) {
            errorResponse(res, 500, error)
        }
    }

}
