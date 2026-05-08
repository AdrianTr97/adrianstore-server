const { getTodosLivros, getLivroById, insertLivro, editLivro, deleteLivro  } = require('../services/serviceLivros') 

function getLivros(req, res){

    try{
        const livros = getTodosLivros()
        res.send(livros)
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
    
}

function getLivro(req, res){

    try{
        const id = req.params.id
        if (id && Number(id)){
            const livros = getLivroPorid(id)
            res.send(livros)
        }else{
            res.status(422)
            res.send("id inválido")
        }
        
        //const livro = getLivroById(id)
        //res.send(livro)
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
    
}

function postLivro(req, res){

    try{
        const novoLivro = req.body

        if(req.body.nome){
            insereLivro(livroNovo)
            res.status(201)
            res.send("Livro inserido com sucesso")
        }else{
            res.status(422)
            res.send("o campo nome é obrigatorio")
        }
        //insertLivro(novoLivro)
        //res.status(201)
        //res.send("Livro inserido com sucesso")

    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function deletarLivro(req, res){

    try{
        const id = req.params.id
        if (id && Number(id)){
            deleteLivro(id)
            res.send("Livro deletado com sucesso")
            //const livros = getLivroPorid(id)
            //res.send(livros)
        }else{
            res.status(422)
            res.send("id inválido")
        }
        //deleteLivro(id)
        res.status(201)
        //res.send("Livro deletado com sucesso")

    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function editarLivro(req, res){

    try{
        const modificacoes = req.body
        const id = req.params.id
        if (id && Number(id)){
            editLivro(modificacoes, id)
            res.send("Livro editado com sucesso")
            //const livros = getLivroPorid(id)
            //res.send(livros)
        }else{
            res.status(422)
            res.send("id inválido")
        }
        //res.status(201)
        //res.send("Livro deletado com sucesso")
        //editLivro(modificacoes, id)
        //res.status(201)
        //res.send("Livro editado com sucesso")

    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}


module.exports = {
    getLivros,
    getLivro,
    postLivro,
    editarLivro,
    deletarLivro
}
