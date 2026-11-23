prompt = require("prompt-sync")();

const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Celular", preco: 2000 },
    { nome: "Tablet", preco: 1500 }
];

const nomeBuscado = prompt("Digite o nome do produto: ");

let encontrado = null;

for (const produto of produtos) {
    if (produto.nome === nomeBuscado) {
        encontrado = produto;
    }
}

if (encontrado) {
    console.log("Preco:", encontrado.preco);
} else {
    console.log("Produto nao encontrado.");
}

produtos.sort((a, b) => a.preco - b.preco);


console.log("Produtos em ordem crescente:");

for (const produto of produtos) {
    console.log(`${produto.nome} - ${produto.preco}`);
}