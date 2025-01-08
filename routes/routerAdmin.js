const express = require('express')
const AdminController = require('../controllers/AdminController.js')
const router = express.Router();

let ctrl = new AdminController();

router.get('/', ctrl.adminView);

// Cadastrar produto
router.get("/cadastrar-produto", ctrl.cadastrarProdutoView);

// Produtos cadastrados
router.get("/produtos-cadastrados", ctrl.produtosCadastradosView);
module.exports = router;