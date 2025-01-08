const express = require('express')
const InicioController = require('../controllers/InicioController.js')
const router = express.Router();

let ctrl = new InicioController();

router.get('/', ctrl.inicio);

module.exports = router;