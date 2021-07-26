const express = require('express');
const jwt = require('express-jwt');
const app = express();
const mongoose = require('mongoose');
const errorResponse = require('../../lib/responses/errorResponse');
const upload = require('express-fileupload');
const uploadRouter = require('./router');

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(upload());

mongoose.connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  app.use(jwt({
    secret: process.env.AUTH_SECRET_KEY,
    algorithms: ['HS256']
  }))

  app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        errorResponse(res, 401, new Error('You are not logged in'));
    }
  });

  app.use('/upload', uploadRouter);

  app.listen(process.env.UPLOAD_PORT, () => {
      console.log(`Upload app is started on port ${process.env.UPLOAD_PORT}`);
  })

  