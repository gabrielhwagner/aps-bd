const express = require('express');

const ProdutoController = require('./controllers/ProdutoController');

const routes = express.Router();

routes.get('/produtos', ProdutoController.listarTodos);
routes.get('/produtos/:id', ProdutoController.listar);
routes.post('/produtos', ProdutoController.criar);
routes.delete('/produtos/:id', ProdutoController.deletar);
routes.put('/produtos/:id', ProdutoController.editar);

module.exports = routes;