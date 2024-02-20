"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var produtorRoutes = (0, express_1.Router)();
produtorRoutes.get("/", function (req, res) {
    return res.send({
        id: 1,
        nome: "Chuveiro",
        avaliacao: 4
    });
});
exports.default = produtorRoutes;
