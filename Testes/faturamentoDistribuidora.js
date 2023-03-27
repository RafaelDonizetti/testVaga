const faturamentoDiario = {
    "01": 5000,
    "02": 6000,
    "03": 3000,
    "04": 7500,
    "05": 4000,
    "06": 2000,
    "07": 9000,
    "08": 5500,
    "09": 7000,
    "10": 8000,
    "11": 4500,
    "12": 6500,
    "13": 3000,
    "14": 10000,
    "15": 3500,
    "16": 5000,
    "17": 5500,
    "18": 6000,
    "19": 7500,
    "20": 4000,
    "21": 2000,
    "22": 3000,
    "23": 7000,
    "24": 8500,
    "25": 9000,
    "26": 6500,
    "27": 3500,
    "28": 4000,
    "29": 5500,
    "30": 5000,
    "31": 6000
}

// Criando um array com os valores de faturamento
const faturamentoArray = Object.values(faturamentoDiario);

// Ignorando sábados e domingos (considerando que os dias da semana são numerados de 1 a 7)
const diasDaSemana = [1, 2, 3, 4, 5];
const faturamentoUtilArray = faturamentoArray.filter((faturamento, index) => diasDaSemana.includes(new Date(2023, 2, index + 1).getDay() + 1))

// Calculando o menor valor de faturamento
const menorFaturamento = Math.min(...faturamentoUtilArray)

// Calculando o maior valor de faturamento
const maiorFaturamento = Math.max(...faturamentoUtilArray)

// Calculando a média mensal
const mediaMensal = faturamentoUtilArray.reduce((acc, curr) => acc + curr) / faturamentoUtilArray.length

// Calculando o número de dias no mês em que o valor de faturamento diário foi superior à média mensal
const diasAcimaDaMedia = faturamentoUtilArray.filter((faturamento) => faturamento > mediaMensal).length;

// Imprimindo os resultados
console.log(`Menor valor de faturamento: ${menorFaturamento}`)
console.log(`Maior valor de faturamento: ${maiorFaturamento}`)
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`)