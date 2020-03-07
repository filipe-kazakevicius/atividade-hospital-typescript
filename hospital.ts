namespace pessoa{
    export class Hospital{
        private nome: string;
        private enfermeiros: Array <Enfermeiro> = [];
        private medicos: Array <Medico> = [];
        private pacientes: Array <Paciente> = [];

        getnome (){
            return this.nome;
        }

        setnome(nome:string){
            this.nome = nome;
        }
        
        addEnfermeiros (enfermeiros:Enfermeiro):void{
            this.enfermeiros.push(enfermeiros);
        }

        getEnfermeiros(){
            return this.enfermeiros;
        }

        addMedicos (medicos:Medico):void{
            this.medicos.push(medicos);
        }
        getmedicos(){
            return this.medicos;
        }

        addPacientes(pacientes:Paciente):void{
            this.pacientes.push(pacientes);
        }
        getpacientes(){
            return this.pacientes;
        }

    }

}