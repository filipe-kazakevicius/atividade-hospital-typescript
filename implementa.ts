namespace pessoa{

    let p = new Paciente();
        p.setnome("Boris");
        p.setcpf("001.001.001-01");
        p.setcodPaciente(1);
    
    let p1 = new Paciente();
        p1.setnome("Filipe");
        p1.setcpf("002.002.002-02");
        p1.setcodPaciente(2);

    let p2 = new Paciente();
        p2.setnome("Pipo");
        p2.setcpf("003.003.003-03");
        p2.setcodPaciente(3);

    let e = new Enfermeiro();
        e.setnome("Daiane");
        e.setcpf("111.111.111-11");
        e.setcodFuncionario(1);
        e.setcoren(11);
    
    let e1 = new Enfermeiro();
        e1.setnome("Fernanda");
        e1.setcpf("222.222.222-22");
        e1.setcodFuncionario(3);
        e1.setcoren(12);

    let e2 = new Enfermeiro();
        e2.setnome("Gabriela");
        e2.setcpf("333.333.333-33");
        e2.setcodFuncionario(3);
        e2.setcoren(13);
    
    let m = new Medico();
        m.setnome("Pica Pau");
        m.setespecialidade ("Operações");
        m.setcrm(123);
        m.setcpf("123.123.123-11");
        m.setcodFuncionario(21);

    let m1 = new Medico();
        m1.setnome("Pernalonga");
        m1.setespecialidade ("Ortopedista");
        m1.setcrm(456);
        m1.setcpf("123.123.123-12");
        m1.setcodFuncionario(22);
    
    let m2 = new Medico();
        m2.setnome("Pateta");
        m2.setespecialidade ("Pediatra");
        m2.setcrm(789);
        m2.setcpf("123.123.123-13");
        m2.setcodFuncionario(23);

        let h = new Hospital ();
        h.setnome ("Santa Casa de Misericórdia")
        h.addEnfermeiros(e);
        h.addEnfermeiros(e1);
        h.addEnfermeiros(e2);
        h.addMedicos(m);
        h.addMedicos(m1);
        h.addMedicos(m2);
        h.addPacientes(p);
        h.addPacientes(p1);
        h.addPacientes(p2);
}