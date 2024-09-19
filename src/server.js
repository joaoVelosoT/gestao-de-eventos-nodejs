const express = require('express');
const sequelize = require('./config/config');
const router = require('./routers/router')
const app = express();


app.use(express.json());
app.use('/', router)



app.get('/healthcheck', (req,res) => {
    res.status(200).json({
        msg : "O servidor esta rodando normalmente",
        alive : true
    })
})



sequelize.authenticate()
.then(async () => {
    console.log("Conexão estabelecida com sucesso");
    await sequelize.sync();
})
.then(async () => {
    app.listen(8080, () => {
        console.log("Servidor rodando na porta 8080")
    })
})
.catch((error) => {
    console.log("Erro ao conectar no banco de dados:    ", error);
})



