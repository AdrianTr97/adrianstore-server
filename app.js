const express = require("express");
const rotaLivro = require("./routes/livros");

const app = express();
const port = 8000;

app.use(express.json());

app.use('/livros', rotaLivro);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})


