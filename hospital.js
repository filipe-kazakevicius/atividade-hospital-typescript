"use strict";
var pessoa;
(function (pessoa) {
    var Hospital = /** @class */ (function () {
        function Hospital() {
            this.enfermeiros = [];
            this.medicos = [];
            this.pacientes = [];
        }
        Hospital.prototype.getnome = function () {
            return this.nome;
        };
        Hospital.prototype.setnome = function (nome) {
            this.nome = nome;
        };
        Hospital.prototype.addEnfermeiros = function (enfermeiros) {
            this.enfermeiros.push(enfermeiros);
        };
        Hospital.prototype.getEnfermeiros = function () {
            return this.enfermeiros;
        };
        Hospital.prototype.addMedicos = function (medicos) {
            this.medicos.push(medicos);
        };
        Hospital.prototype.getmedicos = function () {
            return this.medicos;
        };
        Hospital.prototype.addPacientes = function (pacientes) {
            this.pacientes.push(pacientes);
        };
        Hospital.prototype.getpacientes = function () {
            return this.pacientes;
        };
        return Hospital;
    }());
    pessoa.Hospital = Hospital;
})(pessoa || (pessoa = {}));
