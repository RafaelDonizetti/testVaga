function verificarFibonacci(num) {
    let a = 0,
        b = 1,
        c = 0
    while (c < num) {
        c = a + b
        a = b
        b = c
    }
    if (c === num) {
        console.log(num + " pertence à sequência de Fibonacci.")
    } else {
        console.log(num + " não pertence à sequência de Fibonacci.")
    }
}
// teste para verificação
verificarFibonacci(4)
verificarFibonacci(5)
verificarFibonacci(6)
verificarFibonacci(7)