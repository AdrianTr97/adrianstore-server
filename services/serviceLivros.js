const fs = require('fs')

function getTodosLivros(){
    return JSON.parse(fs.readFileSync('livros.json'))
}

function getLivroById(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroFiltrado = livros.filter(livro => livro.id === id)[0]
    return livroFiltrado
}

function insertLivro(livro){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaListaLivros = [...livros, livro]
    fs.writeFileSync("livros.json" , JSON.stringify(novaListaLivros))

}

function editLivro(modificacoes, id){
    let livros = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livros.findIndex(livro => livro.id === id)
    const conteudoModificado = {...livros[indiceModificado], ...modificacoes}
    livros[indiceModificado] = conteudoModificado
    fs.writeFileSync("livros.json" , JSON.stringify(livros))
}

/*function deleteLivro(id) {
    let livros = JSON.parse(fs.readFileSync("livros.json"))
    const listaAtualizada = livros.filter(livro => livro.id !== id)
    fs.writeFileSync("livros.json", JSON.stringify(listaAtualizada))
}*/

function deleteLivro(id) {
    let livros = JSON.parse(fs.readFileSync("livros.json"))
    const listaAtualizada = livros.filter(livro => livro !== null && livro.id !== id)
    fs.writeFileSync("livros.json", JSON.stringify(listaAtualizada))
}



module.exports = {
    getTodosLivros,
    getLivroById,
    insertLivro,
    editLivro,
    deleteLivro
}