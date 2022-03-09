let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbers = 0;

for (i = 0; i < numbers.length; i += 1) {
    let impar = numbers[i]%2;
    if (impar !== 0) {
        oddNumbers += 1
    }
}

if (oddNumbers === 0) {
    console.log("Nenhum valor ímpar encontrado")
}

else {
    console.log("Existem " + oddNumbers + " números ímpares nessa array")
}