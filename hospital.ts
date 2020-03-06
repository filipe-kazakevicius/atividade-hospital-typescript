namespace Hospital{
    export class Hospital{
        private nome: string;
        private enfermeiros: Array <Enfermeiro> = [];
        private medicos: Array <Medicos> = [];
        private pacientes: Array <Pacientes> = [];

        getnome (){
            return this.nome;
        }

        setnome(nome:string){
            this.nome = nome;
        }
        
        addEnfermeiros (enfermeiros:Enfermeiros):void{
            this.enfermeiros.push(enfermeiros);
        }

        getEnfermeiros(){
            return this.enfermeiros;
        }

        addMedicos (medicos:Medicos):void{
            this.medicos.push(medicos);
        }
        getmedicos(){
            return this.medicos;
        }

        addPacientes(pacientes:Pacientes):void{
            this.pacientes.push(pacientes);
        }
        getpacientes(){
            return this.pacientes;
        }

    }

}