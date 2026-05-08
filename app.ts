const express = require("express");

const app = express();
const port = 8000;

app.get('/' , (req: Request , res: Response) => {
    //res.json("Olá mundo")
    //res.json({ mensagem: "Olá Mundo!" })

})

// Primeiro parâmetro é o path, o caminho para acessar o servidor em determinada página
// Então se a pessoa acessar p "/" a aplicação vai retornar olá mundo

// informa a porta pela qual a aplicação vai escutar 
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})