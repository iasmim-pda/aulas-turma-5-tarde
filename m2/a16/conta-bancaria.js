class ContaBancaria {
  #saldo;

  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.#saldo = saldoInicial;
  }

  // Getter para o saldo
  get saldo() {
    return this.#saldo;
  }

  // Setter para o saldo
  set saldo(valor) {
    if (valor < 0) {
      console.log("Saldo não pode ser negativo!");
    } else {
      this.#saldo = valor;
    }
  }

  // Método para depositar dinheiro na conta
  depositar(valor) {
    if (valor <= 0) {
      console.log("Valor do depósito deve ser positivo!");
    } else {
      this.#saldo += valor;
    }
  }

  // Método para sacar dinheiro da conta
  sacar(valor) {
    if (valor > this.#saldo) {
      console.log("Saldo insuficiente!");
    } else {
      this.#saldo -= valor;
    }
  }
}

let conta = new ContaBancaria("João Silva", 1000);
conta.depositar(500);
console.log(conta.saldo); // 1500
conta.sacar(200);
console.log(conta.saldo); // 1300