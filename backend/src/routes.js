const express = require('express');
const routes = express.Router();

const UsersController = require('./controller/UsersController');

routes.get('/searchUsers', UsersController.searchUsers);
routes.post('/createUsers',UsersController.createUsers);

module.exports = routes;