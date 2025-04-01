const fs = require("fs");

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"));

const novoDados = { id: 3, nome: "O Senhor dos Anéis" };

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDados]));

console.log(JSON.parse(fs.readFileSync("livros.json")));