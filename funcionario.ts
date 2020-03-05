namespace pessoa{
    export class Funcionario extends Pessoa{
        private codFuncionario: number;

        getcodFuncionario ():number{
            return this.codFuncionario;
        }
        setcodFuncionario(cod:number): void{
            this.codFuncionario = cod;
        }
    }

}