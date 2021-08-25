const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const recipesRouter = require('./routes/recipes');
const myRecipesRouter = require('./routes/myRecipes');

const errorResponse = require('../../lib/responses/errorResponse');
const jwt = require('express-jwt');

require('dotenv').config();

app.use(cors());
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));


mongoose.set('useFindAndModify', false);
mongoose.connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  app.use(jwt({
    secret: process.env.AUTH_SECRET_KEY,
    algorithms: ['HS256']
  }).unless({
    path: [
      {
        url: '/recipes', methods: ['GET']
      },
      {
        url: '/recipes/breakfast', methods: ['GET']
      },
      {
        url: '/recipes/brunch', methods: ['GET']
      },
      {
        url: '/recipes/lunch', methods: ['GET']
      },
      {
        url: '/recipes/dinner', methods: ['GET']
      }
    ]
  }));

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