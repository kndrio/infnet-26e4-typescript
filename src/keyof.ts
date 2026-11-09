// keyof: UNIÃO das chaves de um tipo
// Operador que retorna os nomes das propriedades de um tipo
interface Avaliacoes {
    publico: number;
    critica: number;
}

type AvaliacoesKeys = keyof Avaliacoes; // "publico" | "critica"

function lerNota(notas: Avaliacoes, chave: keyof Avaliacoes): number {
    return notas[chave];
}

const notasDeFilme: Avaliacoes = {
    publico: 85,
    critica: 90
};

console.log(lerNota(notasDeFilme, "publico")); // Saída: 85
console.log(lerNota(notasDeFilme, "critica")); // Saída: 90

//console.log(lerNota(notasDeFilme)); // ERRO no TS; Saída: 85
