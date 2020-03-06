namespace pessoa{
    export class Enfermeiro extends Funcionario{
        private coren : number;

        getEnfermeiro(){
           return this.coren;
        }

        setEnfermeiro(coren:number){
            this.coren = coren;
        }
    }
}