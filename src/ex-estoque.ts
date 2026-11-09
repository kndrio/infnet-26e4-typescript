/**
 * Este Typescript define uma interface `ProdutoEstoque` e uma classe `Estoque` que implementa essa interface. A interface `ProdutoEstoque` descreve a estrutura de um produto em estoque, incluindo seu código, nome e quantidade.
 */
interface ProdutoEstoque {
  readonly codigo: string;
  nome: string;
  quantidade: number;
}

class Estoque implements ProdutoEstoque {
    
    constructor(public readonly codigo: string, public nome: string, public quantidade: number) {}

    static readonly limiteMinimo: number = 5; // Limite mínimo de estoque
    private produtos: ProdutoEstoque[] = [];

    adicionar(produto: ProdutoEstoque[]): void {
        this.produtos.push(...produto);
    }

    limiteQuantidade(): [number, number] { 
        const quantidades = this.produtos.map(produto => produto.quantidade);
        return [Math.min(...quantidades), Math.max(...quantidades)];
    }

    emFalta(): ProdutoEstoque[] {
        return this.produtos.filter(produto => produto.quantidade < Estoque.limiteMinimo);
    }

}

const estoqueLoja1 = new Estoque("001", "Estoque Loja 1", 0);
estoqueLoja1.adicionar([
    { codigo: "001", nome: "Produto A", quantidade: 4 },
    { codigo: "002", nome: "Produto B", quantidade: 15 },
    { codigo: "003", nome: "Produto C", quantidade: 8 },
]);

const [minimo, maximo] = estoqueLoja1.limiteQuantidade();
console.log(`Quantidade mínima: ${minimo}, Quantidade máxima: ${maximo}`);

console.log(minimo,maximo);

console.log("Produtos em falta:", estoqueLoja1.emFalta());