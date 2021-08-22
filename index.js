// Concatenação de string em contexto
/*
<button> Pressione-me <button>;
let button = document.querySelector ("button");
button.onclick = function () {
  let nome = prompt ("Qual o seu nome?");
  alert ("Olá " + nome + ", prazer em conhecê-lo");
}
*/

// Números como string
let data1 = "19" + "67";
typeof  data1; // função que devolve o tipo da variável

// Transformando string em número
let string1 = "123";
let numero1 = Number (string1); // função Number transforma valores em números
typeof numero1;
console.log (numero1);

// Transformando número em string
let string2 = numero1.toString (); // função toString transforma valores em string
typeof string2;
console.log (string2);
