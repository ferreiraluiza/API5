import con from "../reository/connection.js";

export async function inserirTurma(pessoa){
    const comando = `
    insert indto tb_turma(nm_turma, ds_curso, nr_ano_letivo, qtd_capacidade, bt_ativo, dt_inclusao)
    values(?, ?, ?, ?, ?, ?)`

    const resposta = await con.query(comando, [pessoa.nome, pessoa.curso, pessoa.anoLetivo, pessoa.capacidade, pessoa.ativo, pessoa.inclusao])
    let info = resposta[0]

    return  info.insertId
}

export async function consultarTurma(){
    const comando = `
    select  id_turma        id,
            nm_turma        nome,
            ds_curso        curso,
            nr_ano_letivo   ano,
            qtd_capacidade  capacidade,
            bt_ativo        ativo,
            dt_inclusao     inclusao

            from tb_turma`

            
    let resposta = await con.query(comando)
    let registros = resposta[0]

    return registros
}

export async function alterarTurma(pessoa, id){
    const comando = `
    update from tb_turma
    set nm_turma = ?, 
        ds_curso = ?,      
        nr_ano_letivo = ?,  
        qtd_capacidade  = ?,
        bt_ativo = ?,       
        dt_inclusao = ?
    where id_turma = ?`

    let resposta = await con.query(comando, [pessoa.nome, pessoa.curso, pessoa.anoLetivo, pessoa.capacidade, pessoa.ativo, pessoa.inclusao])

    let info = resposta[0]
    return info.affectedRows
}

export async function removerTurma(id){
    const comando = `
    delete from tb_turma
    where id_turma = ?`

    let resposta = await con.query(comando, [id])
    let info = resposta[0]

    return info.affectedRows
}