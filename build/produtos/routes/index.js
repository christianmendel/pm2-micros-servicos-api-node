"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var produtoRoutes_1 = __importDefault(require("./produtoRoutes"));
var routes = (0, express_1.Router)();
routes.use(produtoRoutes_1.default);
exports.default = routes;
