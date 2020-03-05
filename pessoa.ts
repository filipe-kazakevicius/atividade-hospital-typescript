namespace pessoa{
    export class Pessoa{
        private nome: string;
        private cpf: string;

        getnome():string{
            return this.nome;
        }

        setnome(nome:string):void{
            this.nome = nome;
        }
        getcpf():string{
            return this.cpf;
        }

        setcpf(cpf:string):void{
            this.cpf = cpf;
        }
    }
        

}