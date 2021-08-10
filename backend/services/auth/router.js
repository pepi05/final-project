const express = require('express');
const router = express.Router();
const controller = require('../../controllers/auth');

router.post('/register', controller.register)
      .post('/login', controller.login)
      .get('/logout', controller.logout)
      .put('/:userId', controller.putUpdate)
      .get('/user', controller.fetchUser)
      
module.exports = router;