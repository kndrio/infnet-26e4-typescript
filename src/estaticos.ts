// A static é usada para definir métodos e propriedades que pertencem à classe em si, e não a instâncias individuais da classe. Isso significa que você pode acessar métodos e propriedades estáticas diretamente na classe, sem precisar criar uma instância da classe.
class ConversorDeMoeda {
    static readonly cotacaoDolar = 5.4;
    static paraReais(dolares: number): number {
        return dolares * this.cotacaoDolar;
    }
}

console.log(ConversorDeMoeda.paraReais(100)); // 540    

const conversor = new ConversorDeMoeda(); // Erro: Não é possível criar uma instância de uma classe com métodos estáticos

//console.log(conversor.paraReais(100)); // Erro: Não é possível acessar métodos estáticos a partir de uma instância da classe