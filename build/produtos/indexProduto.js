"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var server = (0, express_1.default)();
server.use(routes_1.default);
server.use(express_1.default.json());
server.listen(3001, function () { console.log("Micro serviço usuários ON"); });
