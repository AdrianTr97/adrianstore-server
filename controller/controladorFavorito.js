const { getTodosFavoritos, insereFavorito, deletaFavoritoPorId } = require('../services/serviceFavorito')

function getFavoritos(req, res) {
    try {
        const favoritos = getTodosFavoritos()
        res.send(favoritos)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

function postFavorito(req, res) {
    try {
        const id = req.params.id
        insereFavorito(id)
        res.status(201).send("Livro favoritado com sucesso")
    } catch (error) {
        res.status(500).send(error.message)
    }
}

function deletarFavorito(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            deletaFavoritoPorId(id)
            res.send("Favorito deletado com sucesso")
        } else {
            res.status(422).send("ID inválido")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deletarFavorito
}