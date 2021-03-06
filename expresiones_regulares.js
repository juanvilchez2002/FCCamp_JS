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

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
console.log(longHand.test(numbers));
console.log(shortHand.test(numbers));
console.log(longHand.test(varNames));
console.log(shortHand.test(varNames));

//ejercicio
//usar la clase abreviada \w para contar el número de caracteres alfanuméricos
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi;
let result3 = quoteSample.match(alphabetRegexV2)
console.log(result3);//resultado de busqueda
console.log(result3.length); //números de caracteres

//coincidir todo menos letras y números
// usamos el atajo [A-Za-z0-9_] usando \w, para buscar lo contrario usamos \W
//también podriamos usar [^A-Za-z0-9_]
//ejemplo
let shortHand1 = /\W/;
let numbes1 = "42%";
let sentence = "Coding!";
console.log(numbes1.match(shortHand1));
console.log(sentence.match(shortHand1));

//ejercicio
//usar el atajo para encontar la cantidad de caracteres no alfanuméricos
let quoteSample1 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi;
let result4 = quoteSample1.match(nonAlphabetRegex);
console.log(result4.length);

//coincidir todos los números
//para buscar caracteres de dígitos usamos \d, que es igual usar [0-9]
//si el número esta escrito en letras, como "seis", no cuenta

//ejercicios
//usar la clase abreviada para encontrar la cantidad de digitos
let movieName = "2002: A Space Odyssey";
let numRegex = /\d/gi;
let result5 = movieName.match(numRegex);
console.log(result5.length);

//coincidir todos los caracteres no números
//con el atajo \D, buscamos caracteres que no sean dígitos, también podemos usar
//la expresión [^0-9]

//ejercicios
//hallar la cantidad de caracteres que no son números
let movieName1 = "2001: A Space Odyssey";
let noNumRegex = /\D/gi;
let result6 = movieName1.match(noNumRegex)
console.log(result6);
console.log(result6.length);

//haz coincidir espacios en blanco
//se usa los siguientes patrones:
// \s para espacio en blanco, \ retorno de carro
// \ f alineación de formato y \n saltos de linea

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
let result7 = whiteSpace.match(spaceRegex);
console.log(result7);

//ejercicio
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Cambia esta línea
let result8 = sample.match(countWhiteSpace);
console.log(result8)

//haz coincidir caracteres q no sean espacios en blanco
//usando \s buscamos espacios en blanco pero si usamos \S, buscamos lo contrario
//util para encontrar el nro de caracteres

let whiteSpace1 = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
let result9 = whiteSpace1.match(nonSpaceRegex).length;
console.log(result9); //se omite los espacios vacios
console.log(whiteSpace1.length);//no se omite los espacios vacios

//ejercicio
let sample1 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Cambia esta línea
let result10 = sample1.match(countNonWhiteSpace);
console.log(result10)

//especificar el menor y mayr número de coincidencias
//se usa el signo + para buscar 1 ó más caracteres
//se usa el signo * para buscar 0 o más caracteres
//pero oara especificar un número inferior y superior de patrones utilizando
//especificadores de cantidad se usa llaves {}
//ejemplo
//para que coincida con la letra "a" si aparece entre 3 y 5 veces en la cadena "ah"
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
console.log(multipleA.test(A4));//aquí se encuentra en el rango x tener 4 coincidencias
console.log(multipleA.test(A2));//aquí no se encuentra en el rango x tener 2 coincidencias

//ejercicio
//Modifica la expresión regular ohRegex para que coincida con toda la frase Oh no solo cuando 
//tenga de 3 a 6 letras h.
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Cambia esta línea
let result11 = ohRegex.test(ohStr);
console.log(result11)

//especificando solo el menor número de coincidencias
//para hacerlo solo se especifica en inferior seguido de un coma {inferior,}
//ejemplo
//para hacer coincidir solo con la cadena "hah" cuando la letra "a"
//aparezca al menos 3 veces, la expresión regular sería /ha{3,}h/.

let B4 = "haaaah";
let B2 = "haah";
let B100 = "h" + "a".repeat(100) + "h";
let multipleB = /ha{3,}h/;
console.log(multipleB.test(B4));
console.log(multipleB.test(B2));
console.log(multipleB.test(B100));

//ejercicio
//Modifica la expresión regular haRegex para coincidir 
//con la palabra "Hazzah" solo cuando ésta tiene cuatro o más letras z.
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Cambia esta línea
let result12 = haRegex.test(haStr);
console.log(result12);

//especificando en número exacto de coincidencias
//para coincidir un cierto número de patrones, simplemente se pone ese número
//entre corchetes {n}
//ejemplo
//para que coincida con la palabra hah solo con la letra a 3 veces, tu expresión regular sera /ha{3}h/.
let C4 = "haaaah";
let C3 = "haaah";
let C100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
console.log(multipleHA.test(C4));
console.log(multipleHA.test(C3));
console.log(multipleHA.test(C100));

//ejercicios
//Modifica la expresión regular timRegex para hacer 
//coincidir con la palabra Timber solo cuando esta tiene cuatro letras m.
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Cambia esta línea
let result13 = timRegex.test(timStr);
console.log(result13);

//comprueba todos o ninguno
//A veces los patrones que se desea buscar pueden tener partes o no existir. Sin embargo, podría
//ser importante buscarlos de todas maneras.
//Para especificar la existencia de un elemento se usa el signo "?", esto comprueba 0 o 1 de los
//elementos precedentes. 
//ejemplo
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
console.log(rainbowRegex.test(american));
console.log(rainbowRegex.test(british));

//ejercicios
let favWord = "favorite";
let favRegex = /favou?rite/gi; // verifica si existe la "u" despues de "o"
let result14 = favRegex.test(favWord);
console.log(result14);

//LookaHead
//son patrones que le indican a JS que busque por anticipado en la cadenas verificar patrones para 
//más adelante. Puede ser útil cuando se desea buscar patrones sobre la misma cadena
//Existe dos tipos: lookahead positivo y negativo
//lookahead positivo -> buscara asegurarse de que el elementro en el patrón  de busqueda esta allí, pero
//en realidad no lo coincidira. Se usa como "(?=...)"
//lookahead negativo -> buscara para asegurarse de que el elemento en el patrón de búsqueda no este allí
//ejemplo
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
console.log(quit.match(quRegex))
console.log(noquit.match(qRegex));

//verificador de constraseñas simple que busca 3 y 6 caracteres y al menos un número
let pass = "1a2b3c";
let checkPass = /(?=\w{3,6})(?=\D*\d)/
console.log(checkPass.test(pass))

//ejercicios
//Utiliza los lookaheads en el pwRegex para que coincida con las contraseñas que 
//tengan más de 5 caracteres y dos dígitos consecutivos.
let sampleWord = "bana12";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // Cambia esta línea
let result15 = pwRegex.test(sampleWord);
console.log(result15)

//comprueba agrupaciones mixtas de caracteres
//a veces se desea comprobar grupos de caracteres utlizando una expresión regular y
//para conseguirlo usamos paréntesis ()
//ejemplo
//i deseas encontrar Penguin o Pumpkin en una cadena, 
//puedes usar la siguiente expresión regular: /P(engu|umpk)in/g
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
console.log(testRegex.test(testStr));

//ejercicios
//Corrige la expresión regular para que compruebe los nombres de 
//Franklin Roosevelt o Eleanor Roosevelt de una manera sensible a 
//mayúsculas y minúsculas y haciendo concesiones para los segundos nombres.
let myString = "Eleanor Roosevelt";
let myRegex1 = /(Eleanor|Franklin).* Roosevelt/; // Cambia esta línea
let result17 = myRegex1.test(myString);
console.log(result17);

//reutiliza patrones usando grupos de captura
//algunos patrones que se busque aparecerena multiples veces en una cadena
//y es un desperdicio repetir manualmente esa expresión regular
//se puede usar subcadenas repetidas utilizando grupos de captura, los 
//parentesis son usados para encontrar subcadenas repetidas
//para especificar donde aparecera esa cadena repetida, se usa la barra invertida
//y luego un número, ejemplo \1 una vez
//ejemplo
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
console.log(repeatRegex.test(repeatStr));
console.log(repeatStr.match(repeatRegex));

//ejercicio
//Utiliza los grupos de captura en reRegex para que coincida con una cadena que 
//conste sólo del mismo número repetido exactamente tres veces separado por espacios.
let repeatNum = "42 42 42";
let reRegex3 = /^([0-9]+)\s\1\s\1$/; // Cambia esta línea
let result18 = reRegex3.test(repeatNum);
console.log(result18)

