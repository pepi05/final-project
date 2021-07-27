const express = require('express');
const app = express();
const mongoose = require('mongoose');
const recipesRouter = require('./routes/recipes');
const myRecipesRouter = require('./routes/myRecipes');

const errorResponse = require('../../lib/responses/errorResponse');

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });



app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
      errorResponse(res, 401, new Error('You are not logged in'));
  }
})

  app.use('/recipes', recipesRouter);
  app.use('/my-recipes', myRecipesRouter)

  app.listen(process.env.RECIPE_PORT, () => {
    console.log(`Recipes app is started on port ${process.env.RECIPE_PORT}`);
})