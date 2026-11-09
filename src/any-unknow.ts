/**
 * any = Desativa a checagem; Permite qualquer tipo de valor.
 * unknown = Tipo seguro; Exige verificação de tipo antes de usar o valor.
 * @param nome 
 * @returns 
 */
function anunciarAny(nome: any): string {
    return nome.toUpperCase();
}

function anunciarUnknown(nome: unknown): string {
    if (typeof nome === "string") {
        return nome.toUpperCase();
    }
    throw new Error("Expected a string");
}

console.log(anunciarAny("Produto A")); // Saída: "PRODUTO A"
console.log(anunciarUnknown("Produto B")); // Saída: "PRODUTO B"

try {
    //anunciarAny({nome: "Produto C"}); // Não lança erro, mas pode causar comportamento inesperado
    //anunciarAny(111); // Não lança erro, mas pode causar comportamento inesperado
    console.log(anunciarUnknown(123)); // Lança um erro
} catch (error) {
    console.error("Erro:", error instanceof Error ? error.message : error);
}