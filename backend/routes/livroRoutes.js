const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

router.get('/livros', livroController.listarLivros);
router.post('/livros', livroController.adicionarLivro);
router.put('/livros/:id', livroController.atualizarLivro);
router.delete('/livros/:id', livroController.removerLivro);

module.exports = router;
