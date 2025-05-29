var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/listarRank", function (req, res) {
    dashboardController.listarRank(req, res);
})

router.get("/listar", function (req, res) {
    dashboardController.listar(req, res);
})

router.post("/publicar/:idUsuario", function (req, res) {
    dashboardController.publicar(req, res);
});

router.delete("/deletar/:idComentario", function (req, res) {
    dashboardController.deletar(req, res);
});

module.exports = router;