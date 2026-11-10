//Generics em interfaces e types

interface RespostaApi<Dados> {
    ok: boolean;
    dados: Dados;
}

const respostaUsuario: RespostaApi<string[]> = {
    ok: true,
    dados: ['Ana', 'Bia', 'Carlos']
};

const respostaTotal: RespostaApi<number> = {
    ok: true,
    dados: 100
};

/*
null cannot be assigned to type 'string' because it is not a string.
const respostaErro: RespostaApi<string | null> = {
    ok: false,
    dados: null
};
*/

type Resultado<Valor> = {success: true; valor: Valor} | {success: false; erro: string};

function dividir(a: number, b: number): Resultado<number> {
    if (b === 0) {
        return {success: false, erro: 'Não é possível dividir por zero'};
    } else {
        return {success: true, valor: a / b};
    }
}

const resultadoDivisao = dividir(10, 2);

if(resultadoDivisao.success) {
    console.log(`Resultado da divisão: ${resultadoDivisao.valor}`);
} else {
    console.error(`Erro: ${resultadoDivisao.erro}`);
}

console.log(respostaUsuario, respostaTotal, resultadoDivisao);