console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 20;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);


// //primeira maneira 
// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //removendo item 
// } else {
//     //A pessoa é menor de idade
//     if (estaAcompanhada) {
//         console.log("Comprador esta acompanhado");
//         listaDeDestinos.splice(1, 1); //removendo item
//     } else
//         console.log("Não é maior de idade e não posso vender");
// }

// //segunda maneira
// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //removendo item 
// } else if (estaAcompanhada == true) {
//     console.log("Comprador esta acompanhado");
//     listaDeDestinos.splice(1, 1); //removendo item
// } else
//     console.log("Não é maior de idade e não posso vender");




// console.log(listaDeDestinos);

// // console.log(idadeComprador > 18);
// // console.log(idadeComprador < 18);
// // console.log(idadeComprador <= 18);
// // console.log(idadeComprador >= 18);
// // console.log(idadeComprador == 18);


// // exemplo imposto de renda
// const salario = 3300.0;

// if(salario < 2600.0) 
//     console.log("A sua aliquota é de 15%");
//     console.log("Você pode deduzir até R$ 350");

// if(salario < 3750.0) 
//     console.log("A sua aliquota é de 22,5%");
//    console.log("Você pode deduzir até R$ 636");




//terceira maneira
if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!!");
    listaDeDestinos.splice(2, 1); //removendo item 
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque:  \n\n");

if(idadeComprador >= 18 && temPassagemComprada ) {
    console.log("Boa viagem!");
}else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);