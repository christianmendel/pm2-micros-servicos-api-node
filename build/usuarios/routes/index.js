"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuarioRoutes_1 = __importDefault(require("./usuarioRoutes"));
var routes = (0, express_1.Router)();
routes.use(usuarioRoutes_1.default);
exports.default = routes;
