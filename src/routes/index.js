const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.status(200).send({
        "titulo": "Contatinhos Reprograma",
        "version": "1.0.1",
        "mensagem": "Bem vinda a sua API de contatinhos!!!!"
    })
});

module.exports = router;