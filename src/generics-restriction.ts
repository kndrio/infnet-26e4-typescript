//Restrições de generics
function maisLongo<T extends { length: number }>(a: T, b: T): T {
    return (a.length >= b.length) ? a : b;
}

console.log(maisLongo("Olá", "Mundo!")); // Saída: "Mundo!"
console.log(maisLongo([1, 2, 3], [4, 5])); // Saída: [1, 2, 3]

//console.log(maisLongo(10, 20)); // not assignable to parameter of type '{ length: number; }'

//A chave ele precisa existir no objeto, caso contrário, ele não vai compilar
function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const filme = { titulo: "O Poderoso Chefão", ano: 1972 };
console.log(prop(filme, "titulo")); // Saída: "O Poderoso Chefão"
console.log(prop(filme, "ano")); // Saída: 1972

const titulo = prop(filme, "titulo"); // tipo de 'titulo' é string
const ano = prop(filme, "ano"); // tipo de 'ano' é number

console.log(titulo, ano);

//prop(filme, "genero"); // Erro: Argument of type '"genero"' is not assignable to parameter of type '"titulo" | "ano"'.
console.log(prop(titulo, ano)); //TS passa //Js undefined