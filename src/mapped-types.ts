//MAPPED TYPES
//https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
//Criar novos tipos percorrendo as chaves de outros

type ProdutoLoja = { nome: string; preco: number; descricao: string; };

type ProdutoRascunho = { [Chave in keyof ProdutoLoja]?: ProdutoLoja[Chave] };
const rascunho: ProdutoRascunho = { nome: "Camiseta", preco: 29.99 };

//readonly from mapped type
type SomenteLeitura<T> = { readonly [Chave in keyof T]: T[Chave] };
const vitrine: SomenteLeitura<ProdutoLoja> = { nome: "Camiseta", preco: 29.99, descricao: "Camiseta de algodão" };

//vitrine.preco = 19.99; // Erro: Cannot assign to 'preco' because it is a read-only property.

type Marcadores<T> = { [Chave in keyof T]: boolean };
const marcadoresProduto: Marcadores<ProdutoLoja> = { nome: true, preco: false, descricao: true };

//const colunasIncompletas: Marcadores<ProdutoLoja> = { nome: true, preco: false }; // Erro: Property 'descricao' is missing in type '{ nome: boolean; preco: boolean; }' but required in type 'Marcadores<ProdutoLoja>'.


//CONDICIONAIS
//percorrer as chaves e decidir cada chave
type Cadastro = {nome: string; idade: number; email: string; pontos: number};

type Numericos <T> = { [Chave in keyof T as T[Chave] extends number ? Chave : never ]: T [Chave] };

type NumerosDoCadastro = Numericos<Cadastro>;

const estatisticas: NumerosDoCadastro = {idade: 37, pontos: 120};

