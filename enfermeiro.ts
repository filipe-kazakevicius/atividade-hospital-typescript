namespace pessoa{
    export class Enfermeiro extends Funcionario{
        private coren : number;

        getcoren(){
           return this.coren;
        }

        setcoren(coren:number){
            this.coren = coren;
        }
    }
}