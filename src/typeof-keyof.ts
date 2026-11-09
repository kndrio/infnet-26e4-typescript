const fretePorRegiao = { sul: 7.85, sudeste: 7.85, centroOeste: 12.50, norte: 20.83, nordeste: 15.98 };
type TabelaDeFrete = typeof fretePorRegiao; // { sul: number; sudeste: number; centroOeste: number; norte: number; nordeste: number; }

//keyof: UNIÃO das chaves de um tipo; sem precisar declarar a interface
type Regiao = keyof typeof fretePorRegiao;

function frete(regiao: Regiao): number {
    return fretePorRegiao[regiao];
}

console.log(frete("sul")); // Saída: 7.85
//console.log(frete("central")); // central is not assigned to any region; Saída: undefined

