const express = require('express');
const routes = express.Router();

const UsersController = require('./controller/UsersController');
const CategoriesController = require('./controller/CategoriesController');
const OngsController = require('./controller/OngsController');
const CasesController = require('./controller/CasesController');
routes.get('/searchUsers', UsersController.searchUsers);
routes.post('/createUsers',UsersController.createUsers);

routes.get('/searchCategories',CategoriesController.searchCategories);
routes.post('/createCategories',CategoriesController.createCategories);

routes.get('/searchOngs', OngsController.searchOngs);
routes.post('/createOngs', OngsController.createOngs);
routes.delete('/destroyOngs/:id', OngsController.destroyOngs);

routes.get('/searchCases', CasesController.searchCases);
routes.post('/createCases', CasesController.createCases);
routes.delete('/destroyCases/:id', CasesController.destroyCases);
module.exports = routes;