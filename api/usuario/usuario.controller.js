const express = require("express");
const usuarioHandler = require("./usuario.handler")
const router = express.Router();

router.get("/buscar", (req, res) => {
    res.json(usuarioHandler.buscarPessoas());
});

router.post("/cadastrar", (req, res) => {
    res.json(usuarioHandler.cadastrarPessoa(req.body));
})

router.get("/login", (req, res) => {
    res.json(usuarioHandler.login(req.body));
})

module.exports = router;