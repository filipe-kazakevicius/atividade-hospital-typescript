"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var pessoa;
(function (pessoa) {
    var Paciente = /** @class */ (function (_super) {
        __extends(Paciente, _super);
        function Paciente() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Paciente.prototype.getcodPaciente = function () {
            return this.codPaciente;
        };
        Paciente.prototype.setcodPaciente = function (cod) {
            this.codPaciente = cod;
        };
        return Paciente;
    }(pessoa.Pessoa));
    pessoa.Paciente = Paciente;
})(pessoa || (pessoa = {}));
