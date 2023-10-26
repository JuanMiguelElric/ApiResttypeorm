import'reflect-metadata';
import express  from "express";
import { router } from "./routes/routes";
import createConnection from './database';

createConnection();
const server = express();
server.use(express.json())
server.use(router)

server.listen(5010,()=>{
    console.log("servidor on na porta 5010")
})
/* todo servidor backeend tem que ter mais de 3 rotas isso é utilizado o modelo mvc*/

//usuario

// criar usuario C
// editar um usert R
// selecionar um usuario U
// deletar usuario D