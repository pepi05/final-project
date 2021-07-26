const Recipe = require('../models/recipe');
const successResponse = require('../lib/responses/successResponse');
const errorResponse = require('../lib/responses/errorResponse');


module.exports = {
    fresh: async (req, res) => {
        try {
            const recipes = await Recipe.find();
            const latest = recipes.reverse();
            const fresh = await latest.slice(0, 3);
            res.send(fresh)
            // successResponse(res, 'Fresh and New recipes are fetched', fresh);    
        } catch (error) {
            errorResponse(res, 500, error);
        }
    },
    popular: async (req, res) => {
        try {
            const recipes = await Recipe.find();
            const sorted = await recipes.sort((a, b) => {
                return b.likes - a.likes;
            });
            const popularSix = sorted.slice(0,6);
            res.send(popularSix);
            // successResponse(res, 'Most popular 6 recipes list', popularSix);
        } catch (error) {
            errorResponse(res, 500, error);
        } 
    },
    fetchOne: (req, res) => {
        try {
            const recipe = Recipe.findById(req.params.id);
            successResponse(res, `Recipe with id ${req.params.id} is fetched`, recipe);
        } catch (error) {
            errorResponse(res, 500, error);
        }
    },
    fetchAll: async (req, res) => {
        try {
            const recipes = await Recipe.find();
            successResponse(res, 'All recipes are fetched', recipes);
        } catch (error) {
            errorResponse(res, 500, error);
        }
    }
}