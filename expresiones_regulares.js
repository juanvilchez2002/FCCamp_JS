//encontrando caracteres con coincidencia perezosa
//se usa el caracter ?
//ejemplo

let palabra = "titanic";
let codiciosa = /t[a-z]*i/;
let perezosa = /t[a-z]?i/;
console.log(palabra.match(codiciosa));//coincidencia codiciosa
console.log(palabra.match(perezosa))

//ejercicio
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h[1-6]?>/gi; // Cambia esta línea
let result = text.match(myRegex);
console.log(result);

//Coincidir patrones de cadena de inicio
//usamos el caret ^ para bloquear los caracteres q no deseamos encontrar
//y es utilizado para buscar patrones al principio de las cadenas
//ejemplo

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
console.log(firstRegex.test(firstString));

//ejecicio
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Cambia esta línea
let result1 = calRegex.test(rickyAndCal);
console.log(result1);

//Coincidir patrones al final de la cadena
//usamos el caracter $ para buscar patrones al final de la cadenas

//ejemplo
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
let res = storyRegex.test(theEnding);
console.log(res);

//ejercicio
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Cambia esta línea
let result2 = lastRegex.test(caboose);
console.log(result2);

//coincide todas las letras y números
//usando \w es igual a [A-Za-z0-9_] de una forma abreviada

