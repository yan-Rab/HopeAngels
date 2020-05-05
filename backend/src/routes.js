const express = require('express');
const routes = express.Router();

const UsersController = require('./controller/UsersController');
const CategoriesController = require('./controller/CategoriesController');
routes.get('/searchUsers', UsersController.searchUsers);
routes.post('/createUsers',UsersController.createUsers);

routes.get('/searchCategories',CategoriesController.searchCategories);
routes.post('/createCategories',CategoriesController.createCategories);
module.exports = routes;