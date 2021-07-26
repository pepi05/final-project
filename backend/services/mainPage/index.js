const express = require('express');
const app = express();
const mongoose = require('mongoose')
const mainPageRouter = require('./router');
// const jwt = require('express-jwt');

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

app.use('/mainpage', mainPageRouter);

// app.use(jwt({
//   secret: process.env.AUTH_SECRET_KEY,
//   algorithms: ['HS256']
// }).unless({
//   path: [
//       {
//           url: '/mainpage/fresh', methods: ['GET']
//       },
//       {
//         url: '/mainpage/popular', method: ['GET']
//       },
//       {
//         url: '/mainpage/:id', methods: ['GET']
//     },
//     {
//       url: '/mainpage/', methods: ['GET']
//   },

//   ]
// }))

app.listen(process.env.MAINPAGE_PORT, () => {
    console.log(`Main page is started on port ${process.env.MAINPAGE_PORT}`);
})