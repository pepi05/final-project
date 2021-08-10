const express = require('express');
const app = express();
const mongoose = require('mongoose')
const mainPageRouter = require('./router');

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.set('useFindAndModify', false);
mongoose.connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

app.use('/mainpage', mainPageRouter);

app.listen(process.env.MAINPAGE_PORT, () => {
    console.log(`Main page is started on port ${process.env.MAINPAGE_PORT}`);
})