const express = require('express');
const todosRouters = express.Router();
const todosCtrl = require("../controller/todoctrls");

todosRouters.get('/', todosCtrl.getAllTodos);
todosRouters.get('/:id', todosCtrl.getOneTodos);
todosRouters.post('/', todosCtrl.addOneTodos);
todosRouters.patch('/:id', todosCtrl.updateOneTodos);
todosRouters.delete('/:id', todosCtrl.deleteOneTodos);

module.exports = todosRouters;
