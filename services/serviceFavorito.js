const fs = require('fs')

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function insereFavorito(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))

    // Busca o livro pelo ID na lista principal de livros
    const livroInserido = livros.find(livro => livro.id === id)
    
    // Adiciona o livro encontrado na lista de favoritos
    const novaListaDeFavoritos = [...favoritos, livroInserido]
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeFavoritos))
}

function deletaFavoritoPorId(id) {
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))
    const favoritosFiltrados = favoritos.filter(livro => livro.id !== id)
    fs.writeFileSync("favoritos.json", JSON.stringify(favoritosFiltrados))
}

module.exports = {
    getTodosFavoritos,
    insereFavorito,
    deletaFavoritoPorId
}