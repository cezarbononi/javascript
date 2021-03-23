import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupança } from "./ContaPoupança.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Cezar", 11122233309);

const contaCorrenteCezar = new ContaCorrente (cliente1, 1001);
contaCorrenteCezar.depositar(500);
contaCorrenteCezar.sacar(100);

const contaPoupanca = new ContaPoupança(cliente1, 1001);

contaCorrenteCezar.teste();
console.log(contaCorrenteCezar);