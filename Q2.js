let numTeste = 34;
let num1 = 0;
let num2 = 1;

while (num1 < numTeste){
    num1  = num2;
    num2 = num1 + num2;
}
if(num1 == numTeste) console.log("Esse número não pertence a sequência de Fibonacci")
else console.log("Esse número pertence a sequência de Fibonacci")
