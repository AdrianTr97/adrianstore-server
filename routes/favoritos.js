const { Router } = require('express');
const { getFavoritos, postFavorito, deletarFavorito } = require('../controller/controladorFavorito')

const router = Router();

router.get('/', getFavoritos)
router.post('/:id', postFavorito)
router.delete('/:id', deletarFavorito)

module.exports = router;