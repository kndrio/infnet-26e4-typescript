//VISIBILIDADE DE CLASSES, ATRIBUTOS E MÉTODOS

class ContaBancaria {
    public titular: string; //qulaquer um acessa
    private saldo = 0; //somente a própria classe acessa
    protected extrato: string[] = []; //a própria classe + subclasses (filhas)

    constructor(titular: string) {
        this.titular = titular;
    }

    /*
    * Método para depositar um valor na conta
    * @param valor - Valor a ser depositado
    * @returns 
    */
    depositar(valor: number):void {
        this.saldo += valor;
        this.extrato.push(`+ R$ ${valor}`);
    }

    /**
     * Porta de leitura do saldo
     * @returns 
     */
    consultarSaldo(): number {
        //console.log(`Saldo atual: R$ ${this.saldo}`); //Private: Posso pq estou na minha classe
        return this.saldo;
    }
}

const conta = new ContaBancaria("João");
conta.depositar(100);
conta.depositar(50);
//console.log(conta.saldo); //privado não acessa
//console.log(conta.extrato); //protected não acessa



class ContaPoupanca extends ContaBancaria {
    ultimoLancamento(): string {
        console.log(`Saldo atual: R$ ${this.extrato}`); //protected: Posso pq estou em uma subclasse

        return this.extrato[this.extrato.length - 1];
    }

}

const contaPoupanca = new ContaPoupanca("Maria");
contaPoupanca.depositar(200);
console.log(contaPoupanca.ultimoLancamento());