"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_router = express_1.default.Router();
var pgp = require('pg-promise')();
var db = pgp('postgres://postgres:passwd@postgres:5432/postgres');
/* GET home page. */
exports.default = index_router.get('/', function (_, response) {
    response.render('index', { title: 'Express' });
});
index_router.get('/person', function (_, response) {
    // let people = db.one('SELECT * from person')
    // 	.then(people => console.log({people}))
    // 	.catch(error => console.log('Connection error'))
    response.render('index', { title: 'get Person' });
});
