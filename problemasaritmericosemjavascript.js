

/* EXERCÍCIO 1 PROBLEMAS ARITMÉTICOS
var A = parseInt(gets());
var B = parseInt(gets());
let soma = (A + B);
console.log("SOMA = " + soma);
*/
/*
//Desafio 2 Coxinhas
let line = gets().split(" ");
let H = parseInt(line[0]);
let P = parseInt(line[1]);
let media = (H/P).toFixed(2);
console.log(" " + media);
*/
/*
//Desafio 3 Cálculo de Viagem
let line = gets().split(" ");
let H = parseInt(line[0]);
let P = parseInt(line[1]);
let media = (H*P)/12;
let mediaFinal = media.toFixed(3);
console.log(" " + mediaFinal);
*/
/*
//Desafio  4 / 5 - Imposto de Renda
let calc= gets();

calc = parseFloat(calc);

if (calc<=2000){
  console.log('Isento');
} else if (calc<=3000) {
  segundaFaixa = (calc - 2000)*0.08;
  result = parseFloat(segundaFaixa);
  result = result.toFixed(2);
  console.log('R$ ' + result);
} else if (calc<=4500) {
    aux1 = calc - 2000;
    aux2 = calc - 3000;
    aux2 = aux2>=0 ? aux2 : 0;
    segundaFaixa = ((calc - 2000)-aux2)* 0.08;
    terceiraFaixa = (calc - 3000) * 0.18;
    result = parseFloat(segundaFaixa+terceiraFaixa);
    result = result.toFixed(2);
      console.log('R$ ' + result);
} else {
    aux1 = calc - 2000;
    aux2 = calc - 3000;
    aux3 = calc - 4500;
    aux2 = aux2>=0 ? aux2 : 0;
    aux3 = aux3>=0 ? aux3 : 0;
    segundaFaixa = ((calc - 2000)-aux2)* 0.08;
    terceiraFaixa = ((calc - 3000)-aux3) * 0.18;
    quartaFaixa =  (calc-4500) * 0.28;
    result = parseFloat(segundaFaixa+terceiraFaixa+quartaFaixa);
    result = result.toFixed(2);
   console.log('R$ ' + result);
}
*/
/*
//5 / 5 - Teorema da Divisão Euclidiana
let line = gets().split(' ');
let a = parseInt(line[0]);
let b = parseInt(line[1]);

let q = parseInt(a/b);
let r = a - b*q;
if(r < 0){
    r += Math.abs(b);
    q = (a-r)/b;
}
//parseInt apenas como redundancia
console.log(parseInt(q) + " " + parseInt(r));
*/