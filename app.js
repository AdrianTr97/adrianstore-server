const express = require("express");
const rotaLivro = require("./routes/livros");
//favorito
const rotaFavorito = require("./routes/favoritos");

const app = express();
const port = 8000;

app.use(express.json());

app.use('/livros', rotaLivro);
//rota do favorito
app.use('/favoritos', rotaFavorito);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})
