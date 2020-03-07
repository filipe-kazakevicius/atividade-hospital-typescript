"use strict";
var pessoa;
(function (pessoa) {
    var Pessoa = /** @class */ (function () {
        function Pessoa() {
        }
        Pessoa.prototype.getnome = function () {
            return this.nome;
        };
        Pessoa.prototype.setnome = function (nome) {
            this.nome = nome;
        };
        Pessoa.prototype.getcpf = function () {
            return this.cpf;
        };
        Pessoa.prototype.setcpf = function (cpf) {
            this.cpf = cpf;
        };
        return Pessoa;
    }());
    pessoa.Pessoa = Pessoa;
})(pessoa || (pessoa = {}));
