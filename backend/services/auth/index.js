const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRouter = require('./router');
const jwt = require('express-jwt');
const errorResponse = require('../../lib/responses/errorResponse');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();

app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}))

app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({ extended: false }));

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
        url: '/auth/register', methods: ['POST']
      },
      {
        url: '/auth/login', methods: ['POST']
      },
      {
        url: '/auth/user', methods: ['GET']
      },
      {
        url: '/auth/:userId', methods: ['PUT']
      }
    ]
  }));

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        errorResponse(res, 401, new Error('You are not logged in'));
    }
})

app.use('/auth', authRouter)

app.listen(process.env.AUTH_PORT, () => {
    console.log(`Auth is started on port ${process.env.AUTH_PORT}`);
})