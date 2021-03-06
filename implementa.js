"use strict";
var pessoa;
(function (pessoa) {
    var p = new pessoa.Paciente();
    p.setnome("Boris");
    p.setcpf("001.001.001-01");
    p.setcodPaciente(1);
    var p1 = new pessoa.Paciente();
    p1.setnome("Filipe");
    p1.setcpf("002.002.002-02");
    p1.setcodPaciente(2);
    var p2 = new pessoa.Paciente();
    p2.setnome("Pipo");
    p2.setcpf("003.003.003-03");
    p2.setcodPaciente(3);
    var e = new pessoa.Enfermeiro();
    e.setnome("Daiane");
    e.setcpf("111.111.111-11");
    e.setcodFuncionario(1);
    e.setcoren(11);
    var e1 = new pessoa.Enfermeiro();
    e1.setnome("Fernanda");
    e1.setcpf("222.222.222-22");
    e1.setcodFuncionario(3);
    e1.setcoren(12);
    var e2 = new pessoa.Enfermeiro();
    e2.setnome("Gabriela");
    e2.setcpf("333.333.333-33");
    e2.setcodFuncionario(3);
    e2.setcoren(13);
    var m = new pessoa.Medico();
    m.setnome("Pica Pau");
    m.setespecialidade("Operações");
    m.setcrm(123);
    m.setcpf("123.123.123-11");
    m.setcodFuncionario(21);
    var m1 = new pessoa.Medico();
    m1.setnome("Pernalonga");
    m1.setespecialidade("Ortopedista");
    m1.setcrm(456);
    m1.setcpf("123.123.123-12");
    m1.setcodFuncionario(22);
    var m2 = new pessoa.Medico();
    m2.setnome("Pateta");
    m2.setespecialidade("Pediatra");
    m2.setcrm(789);
    m2.setcpf("123.123.123-13");
    m2.setcodFuncionario(23);
    var h = new pessoa.Hospital();
    h.setnome("Santa Casa de Misericórdia");
    h.addEnfermeiros(e);
    h.addEnfermeiros(e1);
    h.addEnfermeiros(e2);
    h.addMedicos(m);
    h.addMedicos(m1);
    h.addMedicos(m2);
    h.addPacientes(p);
    h.addPacientes(p1);
    h.addPacientes(p2);
    document.getElementById("hospital").textContent = h.getnome();
    var tbMedico = document.getElementById("tbMedico");
    h.getmedicos().forEach(function (h) {
        var nome = h.getnome();
        var cpf = h.getcpf();
        var crm = h.getcrm();
        var especialidade = h.getespecialidade();
        var html = "<tr><td>" + nome + "</td><td>" + cpf + "</td><td>" + crm + "</td><td>" + especialidade + "</td></tr>";
        tbMedico.innerHTML += html;
    });
    var tbEnfermeiras = document.getElementById("tbEnfermeiras");
    h.getEnfermeiros().forEach(function (h) {
        var nome = h.getnome();
        var cpf = h.getcpf();
        var corem = h.getcoren();
        var html = "<tr><td>" + nome + "</td><td>" + cpf + "</td><td>" + corem + "</td></tr>";
        tbEnfermeiras.innerHTML += html;
    });
    var tbPacientes = document.getElementById("tbPacientes");
    h.getpacientes().forEach(function (h) {
        var nome = h.getnome();
        var cpf = h.getcpf();
        var cod = h.getcodPaciente();
        var html = "<tr><td>" + nome + "</td><td>" + cpf + "</td><td>" + cod + "</td></tr>";
        tbPacientes.innerHTML += html;
    });
})(pessoa || (pessoa = {}));
