const express = require('express')
const AdminController = require('../controllers/AdminController.js')
const AuthMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

let ctrl = new AdminController();
let auth = new AuthMiddleware();

router.get('/', auth.validar ,ctrl.adminView);

// Cadastrar produto
router.get("/cadastrar-produto", auth.validar, ctrl.cadastrarProdutoView);

// Produtos cadastrados e categoria
router.get("/produtos-cadastrados", auth.validar, ctrl.produtosCadastradosView);
router.get("/cadastrar-categoria", auth.validar, ctrl.cadastrarCategoriaView);
module.exports = router;