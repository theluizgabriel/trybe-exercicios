let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (i = 0; i < numbers.length; i+=1) {
    soma += numbers[i]
}

let mediaAritmetica = soma/numbers.length;
console.log(mediaAritmetica)

if (mediaAritmetica > 20) {
    console.log("O número é maior que 20")
}

else {
    console.log("O número é menor que 20")
}
