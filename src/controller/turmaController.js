import * as db from '../repository/turmaRepository.js';

import {Router} from "express";
const endpoints = Router();

endpoints.get('/treito_api/', async (req, resp)=>{
    try{
        let registros = await db.consultarTurma();
        resp.send(registros);
    }
    catch (err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/treito_api/',async (req, resp) =>{
    try{
        let pessoa = req.body;
        let id = await db.inserirTurma(pessoa);

        resp.send({
            novoId: id
        })
    }

    catch (err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

endpoints.put('/treito_api/:id',async (req, resp) =>{
    try {
        let id= req.params.id;
        let pessoa=req.body;

        let linhasAfetadas = await db.alterarTurma(id, pessoa);
        if (linhasAfetadas >= 1){
            resp.send();
        }   
        else {
            resp.status(404).send({erro: 'Nenhum registro encontrado'})
        }
     }
     catch (err){
        resp.status(400).send({
            erro: err.message
        })
     }
})

endpoints.delete('/treito_api/:id', async (req,resp) =>{
    try{
        let id = req.params.id;

        let linhasAfetadas = await db.removerTurma(id);
        if(linhasAfetadas >= 1){
            resp.send();
        }
        else {
            resp.status(404).send({erro: 'Nenhum registro encontrado'})
        }
    }
    catch (err){
        resp.status(400).send({
            erro:err.mesage
        })
    }
})

export default endpoints;