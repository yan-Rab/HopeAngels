const express = require('express');
const routes = express.Router();
const authMiddleware = require("./middlewares/authRoutes");


const UsersController = require('./controller/UsersController');
const CategoriesController = require('./controller/CategoriesController');
const OngsController = require('./controller/OngsController');
const CasesController = require('./controller/CasesController');

routes.get('/searchUsers', UsersController.searchUsers,);
routes.post('/createUsers',UsersController.createUsers);
routes.post('/authenticationUsers',UsersController.authenticationUsers);

routes.get('/searchCategories',authMiddleware,CategoriesController.searchCategories);
routes.post('/createCategories',CategoriesController.createCategories);

routes.get('/searchOngs',authMiddleware, OngsController.searchOngs);
routes.post('/createOngs',authMiddleware, OngsController.createOngs);
routes.delete('/destroyOngs/:id', OngsController.destroyOngs);
routes.post('/authenticationOngs',OngsController.authenticationOngs);

routes.get('/searchCases', authMiddleware, CasesController.searchCases);
routes.post('/searchCasesById', CasesController.searchCasesById);
routes.post('/createCases',authMiddleware, CasesController.createCases);
routes.delete('/destroyCases/:id', CasesController.destroyCases);

module.exports = routes;