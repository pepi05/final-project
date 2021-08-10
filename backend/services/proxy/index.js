const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

require('dotenv').config();

app.use('/recipes', proxy(
    `http://localhost:${process.env.RECIPE_PORT}`, {
        proxyReqPathResolver: (req) => {
            return `http://localhost:${process.env.RECIPE_PORT}/recipes${req.url}`
        }
    }
));

app.use('/auth', proxy(
    `http://localhost:${process.env.AUTH_PORT}`, {
        proxyReqPathResolver: (req) => {
            return `http://localhost:${process.env.AUTH_PORT}/auth${req.url}`
        }
    }
));

app.use('/upload', proxy(
    `http://localhost:${process.env.UPLOAD_PORT}`, {
        proxyReqPathResolver: (req) => {
            return `http://localhost:${process.env.UPLOAD_PORT}/upload${req.url}`
        }
    }
));

app.use('/', proxy(
    `http://localhost:${process.env.MAINPAGE_PORT}`, {
        proxyReqPathResolver: (req) => {
            return `http://localhost:${process.env.MAINPAGE_PORT}${req.url}`
        }
    }
));

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Proxy service successfully started on port ${PORT}`);
});