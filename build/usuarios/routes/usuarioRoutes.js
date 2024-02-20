"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuarioRoutes = (0, express_1.Router)();
usuarioRoutes.get("/", function (req, res) {
    return res.send({
        id: 1,
        nome: "Alex",
        idade: 42
    });
});
exports.default = usuarioRoutes;
