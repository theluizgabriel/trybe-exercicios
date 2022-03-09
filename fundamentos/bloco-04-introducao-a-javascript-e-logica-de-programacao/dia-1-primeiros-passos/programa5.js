let trianguloPerfeito = false;
const lado1 = 100;
const lado2 = 40;
const lado3 = 40;

if (lado1, lado2, lado3 < 0) {
    console.log("Invalid angle")
}

else if (lado1+lado2+lado3 == 180) {
    trianguloPerfeito = true;
    console.log(trianguloPerfeito)
}

else if (lado1+lado2+lado3 !== 180) {
    trianguloPerfeito = false;
    console.log(trianguloPerfeito)
}
