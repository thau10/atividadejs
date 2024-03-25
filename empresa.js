let programacao=['Heloa', 'Maria Rafaela', 'Maria Eduarda', 'Diego', 'João Victor', 'Gabriel', 'Luana', 'Thauanne', 'Aline', 'Lucas']

let segurança=['Leonardo', 'Miguel', 'João Paulo', 'Rafael'];

segurança.pop();
programacao.push("Rafael");

console.log("Time de programação:", programacao);
console.log("########################")
console.log("Time de segurança:", segurança);

let funcionarios = programacao.concat(segurança);
console.log(funcionarios)


