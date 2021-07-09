const contatosJson = require("../models/contatinhos.json");

const getAll = (request, response) => {
    response.status(200).send(contatosJson)
};

const getByName = (request, response) => {
    const nomeRequerido = request.query.nome.toLowerCase()
    const nomeFiltrado = contatosJson.find(contato => contato.nome.toLowerCase().includes(nomeRequerido))

    response.status(200).send(nomeFiltrado)
    console.log(nomeRequerido)
};

const getById = (request, response) => {
    const idRequerido = request.params.id
    const contatoFiltrado = contatosJson.find(contato => contato.id == idRequerido)

    response.status(200).send(contatoFiltrado)
};

const criarContato = (request, response) => {
    const nomeRequerido = request.body.nome
    const celularRequerido = request.body.celular 
    const redesSociaisRequerido = request.body.redessociais  

const novoContato = {
    id: "3",
    nome: nomeRequerido,
    celular: celularRequerido,
    redessociais: redesSociaisRequerido,
};

contatosJson.push(novoContato);

response.status(200).send(novoContato);
console.log(novoContato);
};

const apagarContato = (request, response) => {
    const idRequerido = request.params.id;
    const contatoFiltrado = contatosJson.find(contato => contato.id == idRequerido);
    const indice = contatosJson.indexOf(contatoFiltrado);

    contatosJson.splice(indice, 1);

    response.status(200).send(
        [
            {
                "message": "Contatinho apagado com sucesso da sua vida! rsrs"
            },
            contatosJson
        ]
    )
}


module.exports = {
    getAll,
    getByName,
    getById,
    criarContato,
    apagarContato,
}