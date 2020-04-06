"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controller/todos");
const router = express_1.Router();
router.post('/', todos_1.createTodo);
router.get('/', todos_1.getTodo);
router.patch('/:id', todos_1.editTodo);
router.delete('/:id', todos_1.deleteTodo);
exports.default = router;