//Assertions: TS deixa comigo
//Use com sabedoria
const corPrimaria: unknown = JSON.parse('"azul"');
const cor = corPrimaria as string; // Type assertion
console.log(cor.toUpperCase()); // Saída: "AZUL"

//const numero = "texto" as number; // Type assertion
const tamanhos = ["P", "M", "G"] as const; // Type assertion
type Tamanhos = typeof tamanhos[number]; // "P" | "M" | "G"
const meuTamanho: Tamanhos = "M"; // OK

//tamanhos.push("GG"); // ERRO no TS; Saída: "Property 'push' does not exist on type 'readonly ["P", "M", "G"]'."



