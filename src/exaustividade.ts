//Exaustividade de tipos
// never = tipo que nunca ocorre, ou seja, não existe valor que seja do tipo never

type MeioDePagamento = {tipo: "pix"} | {tipo: "cartao" ; parcelas: number} | {tipo: "dinheiro"} | {tipo: "boleto"};

function taxaMeioPagamento(meio: MeioDePagamento): number {
    switch (meio.tipo) {
        case "pix":
            return 0;
        case "cartao":
            return 5.99 * meio.parcelas;
        case "dinheiro":
            return 0;
        case "boleto":
            return 2.99;
        default: {
            // O TypeScript vai inferir que o tipo de `meio` é `never`, porque todos os casos possíveis foram tratados acima.
            const casoEsquecido: never = meio;
            // Erro de compilação: Type 'MeioDePagamento' is not assignable to type 'never'.
            //throw new Error(`Unhandled case: ${casoEsquecido}`);
            return casoEsquecido;
        }
    }
}

console.log(taxaMeioPagamento({tipo: "pix"})); // 0
console.log(taxaMeioPagamento({tipo: "cartao", parcelas: 3})); // 17.97
console.log(taxaMeioPagamento({tipo: "dinheiro"})); // 0
console.log(taxaMeioPagamento({tipo: "boleto"})); // 2.99
//console.log(taxaMeioPagamento({tipo: "ted"})); // not assignable to type 'MeioDePagamento'

function falhar(mensagem: string): never {
    throw new Error(mensagem);
}

function garantirExaustividade(valor: never): never {
    return falhar(`Valor não tratado: ${valor}`);
}

type StatusEntrega = "pendente" | "em_transito" | "entregue";

function taxaStatusEntrega(status: StatusEntrega): string {
    switch (status) {
        case "pendente":
            return "Entrega pendente, taxa de R$ 10,00";
        case "em_transito":
            return "Entrega em trânsito, taxa de R$ 5,99";
        case "entregue":
            return "Entregue. Taxa de R$ 0,00";
        default: {
            return garantirExaustividade(status);
        }
    }
}

console.log(taxaStatusEntrega("entregue")); // "Entregue. Taxa de R$ 0,00"

//console.log(taxaStatusEntrega("a caminho")); // not assignable to type 'StatusEntrega'