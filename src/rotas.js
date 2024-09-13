import e from 'cors'
import turmaController from './controller/listaNegraController.js'

export default function adicionarRotas(servidor){
    servidor.use(turmaController);
}