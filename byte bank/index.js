import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente("Cezar", 11122233309, 20528856);
const cliente2 = new Cliente("Ana", 11122233309, 45052050);

const contaCorrenteCezar = new ContaCorrente(1001, cliente1);
contaCorrenteCezar.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteCezar.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);
