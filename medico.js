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
    var Medico = /** @class */ (function (_super) {
        __extends(Medico, _super);
        function Medico() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Medico.prototype.getcrm = function () {
            return this.crm;
        };
        Medico.prototype.setcrm = function (crm) {
            this.crm = crm;
        };
        Medico.prototype.getespecialidade = function () {
            return this.especialidade;
        };
        Medico.prototype.setespecialidade = function (esp) {
            this.especialidade = esp;
        };
        return Medico;
    }(pessoa.Funcionario));
    pessoa.Medico = Medico;
})(pessoa || (pessoa = {}));
