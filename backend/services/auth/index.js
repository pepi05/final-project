const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRouter = require('./router');
const jwt = require('express-jwt');
const errorResponse = require('../../lib/responses/errorResponse');

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
            url: '/auth/loginform', methods: ['GET']
        }
    ]
}))

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        errorResponse(res, 401, new Error('You are not logged in'));
    }
})


app.use('/auth', authRouter)

app.listen(process.env.AUTH_PORT, () => {
    console.log(`Auth is started on port ${process.env.AUTH_PORT}`);
})