# 🗺️ Mapa de Conceitos de TypeScript (Infnet)

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-22+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![tsx](https://img.shields.io/badge/Runtime-tsx-blueviolet?style=for-the-badge)](https://github.com/privatenumber/tsx)
[![Strict](https://img.shields.io/badge/Mode-Strict-success?style=for-the-badge)](https://www.typescriptlang.org/tsconfig#strict)

> Repositório de exemplos práticos e laboratoriais desenvolvido na disciplina **Engenharia Front-end com TypeScript e Angular [26E4-26E4]** do **Instituto Infnet**.

---

## 🎯 Visão Geral

Este projeto foi concebido como um laboratório de referência e mapa mental interativo para os conceitos fundamentais e avançados de **TypeScript**. Ele reúne implementações focadas, didáticas e executáveis que exemplificam desde os pilares do sistema de tipos até metaprogramação de tipos em nível de compilação, abrangendo as etapas de estudo do curso (com ênfase nas Etapas 4, 5 e 6).

O objetivo é proporcionar um ambiente seguro para experimentação de código, permitindo comparar abordagens inseguras (`any`, mutações descontroladas, casos esquecidos) com os padrões recomendados pela comunidade e pela tipagem estrita do TypeScript.

---

## 📚 Mapa de Conceitos e Arquitetura do Repositório

Todos os exemplos estão localizados no diretório [`src/`](file:///C:/Users/Dell/src/infnet-26e4-ts-mapa/src). Abaixo está a correlação detalhada entre cada arquivo e os tópicos abordados:

| Arquivo | Conceito Principal | Descrição Didática |
| :--- | :--- | :--- |
| [`any-unknow.ts`](file:///C:/Users/Dell/src/infnet-26e4-ts-mapa/src/any-unknow.ts) | **`any` vs `unknown`** | Diferença entre desativar a checagem de tipos (`any`) e adotar tipagem segura com *type narrowing* (`unknown`), utilizando `typeof` e validações em runtime. |
| [`asserts.ts`](file:///C:/Users/Dell/src/infnet-26e4-ts-mapa/src/asserts.ts) | **Type & Const Assertions** | Afirmações de tipo (`as Tipo`), asserções constantes (`as const`), extração de tipos literais via `typeof array[number]` e garantia de imutabilidade. |
| [`estaticos.ts`](file:///C:/Users/Dell/src/infnet-26e4-ts-mapa/src/estaticos.ts) | **Membros Estáticos** | Uso de `static` e `static readonly` em classes para utilitários e constantes vinculadas à classe em si, sem necessidade de instanciação. |
| [`visibilidade.ts`](file:///C:/Users/Dell/src/infnet-26e4-ts-mapa/src/visibilidade.ts) | **Modificadores de Acesso** | Encapsulamento em POO com `public`, `private` e `protected`, ilustrado por meio de uma classe base (`ContaBancaria`) e subclasse herdada (`ContaPoupanca`). |
| [`implements.ts`](file:///C:/Users/Dell/src/infnet-26e4-ts-mapa/src/implements.ts) | **Implementação de Interfaces** | Aplicação de contratos com a palavra-chave `implements`, *parameter properties* no construtor (`constructor(private ...)`) e polimorfismo. |
| [`ex-estoque.ts`](file:///C:/Users/Dell/src/infnet-26e4-ts-mapa/src/ex-estoque.ts) | **Exercício Integrador de POO** | Caso prático de controle de estoque unindo interfaces, classes, tuplas (`[number, number]`), propriedades estáticas e métodos com *spread operator*. |
| [`generics-function.ts`](file:///C:/Users/Dell/src/infnet-26e4-ts-mapa/src/generics-function.ts) | **Funções Genéricas** | Uso de parâmetros de tipo (`<T>`) para manter a fidelidade e inferência de tipos em tempo de compilação sem recorrer a `any`. |
| [`generics-class.ts`](file:///C:/Users/Dell/src/infnet-26e4-ts-mapa/src/generics-class.ts) | **Classes Genéricas** | Implementação de estruturas de dados genéricas e fortemente tipadas (estrutura de Fila / Queue reutilizável). |
| [`generics-type-interface.ts`](file:///C:/Users/Dell/src/infnet-26e4-ts-mapa/src/generics-type-interface.ts) | **Generics em Interfaces & Types** | Modelagem de envelopes de resposta de API (`RespostaApi<Dados>`) e implementação do padrão funcional *Result/Either* para tratamento de erros. |
| [`generics-restriction.ts`](file:///C:/Users/Dell/src/infnet-26e4-ts-mapa/src/generics-restriction.ts) | **Restrições em Generics** | Uso de restrições estruturais com `extends` (ex.: `T extends { length: number }`) e acesso indexado seguro a atributos de objetos com `K extends keyof T`. |
| [`keyof.ts`](file:///C:/Users/Dell/src/infnet-26e4-ts-mapa/src/keyof.ts) | **Operador `keyof`** | Criação de uniões literais a partir das propriedades de um tipo e segurança em tempo de compilação no acesso dinâmico a chaves de objetos. |
| [`typeof-keyof.ts`](file:///C:/Users/Dell/src/infnet-26e4-ts-mapa/src/typeof-keyof.ts) | **Composição `typeof` + `keyof`** | Padrão *Single Source of Truth* (fonte única de verdade), derivando tipos e uniões diretamente de objetos e dicionários JavaScript em tempo de execução. |
| [`mapped-types.ts`](file:///C:/Users/Dell/src/infnet-26e4-ts-mapa/src/mapped-types.ts) | **Mapped Types & Condicionais** | Metaprogramação de tipos: criação de tipos derivados percorrendo chaves, aplicação de modificadores (`?`, `readonly`), e filtros condicionais com `as` e `never`. |
| [`exaustividade.ts`](file:///C:/Users/Dell/src/infnet-26e4-ts-mapa/src/exaustividade.ts) | **Checagem Exaustiva (`never`)** | *Exhaustiveness checking* em uniões discriminadas (*Discriminated Unions*), garantindo que o compilador aponte erros caso um caso de `switch` seja esquecido. |

---

## 🛠️ Tecnologias e Configuração do Ambiente

O projeto adota uma arquitetura moderna, rápida e alinhada às melhores práticas contemporâneas de desenvolvimento em TypeScript:

- **TypeScript 5.8+**: Com a flag `"strict": true` ativada no [`tsconfig.json`](file:///C:/Users/Dell/src/infnet-26e4-ts-mapa/tsconfig.json), espelhando o rigor máximo de verificação do TypeScript Playground.
- **Isolamento de Módulos (`moduleDetection: "force"`)**: Cada arquivo `.ts` é tratado automaticamente como um módulo isolado, dispensando a necessidade de `export {}` e prevenindo colisões no escopo global (como variáveis `name`, `status`, etc.).
- **Execução com `tsx`**: Executor baseado em esbuild que permite executar arquivos `.ts` diretamente no Node.js com performance instantânea, sem necessidade de etapa prévia de build manual (`noEmit: true`).
- **Módulos ES2022 / ESNext**: Utilização de recursos modernos do ECMAScript e resolução de módulos no padrão `"Bundler"`.

---

## 🚀 Como Executar

### Pré-requisitos

- **Node.js** (versão 20+ ou 22+)
- Gerenciador de pacotes: **pnpm** (recomendado pelo lockfile) ou **npm**

### 1. Instalação das Dependências

Clone o repositório ou navegue até a pasta do projeto e instale as dependências:

```bash
# Utilizando pnpm (recomendado)
pnpm install

# Ou utilizando npm
npm install
```

### 2. Checagem Estática de Tipos

Para rodar a verificação rigorosa de todos os arquivos do projeto com o compilador oficial (`tsc`):

```bash
# Execução única
pnpm run check
# ou: npm run check

# Execução contínua (watch mode)
pnpm run check:watch
# ou: npm run check:watch
```

### 3. Execução dos Exemplos com `tsx`

Você pode executar qualquer arquivo individual diretamente no terminal:

```bash
# Executando o exercício de estoque
npx tsx src/ex-estoque.ts
# ou via script npm:
pnpm run start src/ex-estoque.ts

# Executando o exemplo de exaustividade
npx tsx src/exaustividade.ts

# Executando o exemplo de mapped types
npx tsx src/mapped-types.ts

# Executando com modo de observação (hot-reload)
pnpm run dev src/generics-restriction.ts
```

---

## 🔍 Depuração no VS Code

O projeto inclui configuração pronta para depuração interativa via VS Code em [`.vscode/launch.json`](file:///C:/Users/Dell/src/infnet-26e4-ts-mapa/.vscode/launch.json).

Para depurar:
1. Abra o arquivo desejado no VS Code (ou defina-o na propriedade `"program"` em `.vscode/launch.json`).
2. Adicione breakpoints nas linhas desejadas.
3. Pressione `F5` ou acesse a aba **Run and Debug** e clique em **Launch Program**.

---

## 📂 Estrutura de Diretórios

```text
infnet-26e4-ts-mapa/
├── .vscode/
│   └── launch.json              # Configurações de debug para VS Code
├── src/
│   ├── any-unknow.ts            # any vs unknown e estreitamento de tipos
│   ├── asserts.ts               # Type assertions e const assertions
│   ├── estaticos.ts             # Propriedades e métodos estáticos
│   ├── ex-estoque.ts            # Exercício integrador de POO e estoque
│   ├── exaustividade.ts         # Discriminated unions e checagem com never
│   ├── generics-class.ts        # Classes genéricas (Fila/Queue)
│   ├── generics-function.ts     # Funções genéricas
│   ├── generics-restriction.ts  # Restrições (extends, keyof) em generics
│   ├── generics-type-interface.ts # Generics em interfaces e Result pattern
│   ├── implements.ts            # Contratos de interfaces em classes
│   ├── keyof.ts                 # Operador keyof e propriedades seguras
│   ├── mapped-types.ts          # Mapped types, modificadores e filtros
│   ├── typeof-keyof.ts          # Inferência a partir de objetos em runtime
│   └── visibilidade.ts          # Modificadores public, private e protected
├── .gitignore                   # Arquivos ignorados pelo Git
├── package.json                 # Metadados, scripts e dependências do projeto
├── pnpm-lock.yaml               # Bloqueio de versões das dependências
├── tsconfig.json                # Configuração estrita do compilador TypeScript
└── README.md                    # Documentação do projeto
```

---

## 🎓 Contexto Acadêmico

- **Instituição:** [Instituto Infnet](https://www.infnet.edu.br/)
- **Disciplina:** Engenharia Front-end com TypeScript e Angular `[26E4-26E4]`
- **Tópicos:** TypeScript Básico a Avançado, Tipagem Estática, Orientação a Objetos, Generics, Metaprogramação e Boas Práticas de Engenharia Front-end.
