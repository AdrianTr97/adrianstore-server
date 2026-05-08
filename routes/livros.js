const { Router } = require('express');
const {  getLivros , getLivro, postLivro, editarLivro, deletarLivro  } = require("../controller/controladorLivro")


const router = Router();

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/:id', editarLivro)

router.delete('/:id', deletarLivro)

module.exports = router;