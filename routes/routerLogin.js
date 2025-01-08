const express = require('express')
const LoginController = require('../controllers/LoginController.js')
const router = express.Router();

let ctrl = new LoginController();

router.get('/', ctrl.loginView);

module.exports = router;