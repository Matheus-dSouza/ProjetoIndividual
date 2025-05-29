var dashboardModel = require("../models/dashboardModel");

function listarRank(req, res) {
    dashboardModel.listarRank().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao recuperar o ranking: ", erro.sqlMessage)
        res.status(500).json(erro.sqlMessage);
    });
}

function listar(req, res) {
    dashboardModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    dashboardModel.listarPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function pesquisarComentario(req, res) {
    var comentario = req.params.comentario;

    dashboardModel.pesquisarDescricao(comentario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function publicar(req, res) {
    var titulo = req.body.titulo;
    var conteudo = req.body.conteudo;
    var idUsuario = req.params.idUsuario;

    if (conteudo == undefined || conteudo == null || conteudo == '') {
        res.status(400).send("O conteúdo está indefinido!");
    } else if (idUsuario == undefined || idUsuario == null || idUsuario == '') {
        res.status(403).send("O id do usuário está indefinido!");
    } else if (titulo == undefined || titulo == null || titulo == '') {
        res.status(403).send("O título está indefinido!");
    } else {
        dashboardModel.publicar(titulo, conteudo, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function deletar(req, res) {
    var idUsuario = req.query.idUsuario;
    var idComentario = req.params.idComentario;

    if (idComentario == undefined || idComentario == null || idComentario == '') {
        res.status(400).send("O id do comentário está indefinido!");
    }
    else if (idUsuario == undefined || idUsuario == null || idUsuario == '') {
        res.status(400).send("O usuário está indefinido!");
    }
    else {
        dashboardModel.deletar(idComentario, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    listarRank,
    listar,
    listarPorUsuario,
    pesquisarComentario,
    publicar,
    deletar
}