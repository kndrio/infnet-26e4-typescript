//classes genéricas 
class Fila<Item> {
    private itens: Item[] = [];

    entrar(item: Item): void {
        this.itens.push(item);
    }

    sair(): Item | undefined {
        return this.itens.shift();
    }

    get tamanho(): number {
        return this.itens.length;
    }
}

const filaDeSenhas = new Fila<number | string>();
filaDeSenhas.entrar("4040404");
filaDeSenhas.entrar(1010101);
filaDeSenhas.entrar(2020202);
filaDeSenhas.entrar(3030303);

console.log(filaDeSenhas.sair(), filaDeSenhas.tamanho); // Saída: 1010101 2


const filaDeNomes = new Fila<string>();
filaDeNomes.entrar("Ana");
filaDeNomes.entrar("Bia");
filaDeNomes.entrar("Carlos");  

console.log(filaDeNomes.sair(), filaDeNomes.tamanho); // Saída: Ana 2

