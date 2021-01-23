const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');


const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);


//conexao com o mongodb
//conetar seu banco de dados mongodb atlas
mongoose.connect('mongodb+srv://<database>:<password>@cluster0.svzi1.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use((req,res, next)=> {
    req.io = io;

    next();
})

app.use(cors());
//mostrando o acesso a rotas de conexão
app.use(require('./routes'));
server.listen(3030);