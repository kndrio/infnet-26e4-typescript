//GENERICS: um tipo variável que o TS descobre nas chamadas
// Permite criar funções e classes que trabalhem com diferentes tipos de dados, sem perder o tipo em tempo de compilação

function primeiroAny( lista: any[]): any {
    return lista[0];
}
const minhaListaAny = ["a", "b", "c"];

function primeiroGenerico<T>( lista: T[]): T {
    return lista[0];
}   

const primeiraLetraAny = primeiroAny(minhaListaAny); //const primeiraLetraAny: any
const primeiraLetraGenerica = primeiroGenerico(minhaListaAny); // const primeiraLetraGenerica: string

console.log(minhaListaAny, primeiraLetraAny, primeiraLetraGenerica); // Saída: ["a", "b", "c"] "a" "a"


const string = primeiroGenerico<string>([]); //const string: string
const boleano = primeiroGenerico<boolean>([]); //const boleano: boolean