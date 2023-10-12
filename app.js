//Unidad 1

//1)
//Solicitar al usuario que ingrese su nombre
let nombre1 = prompt("Por favor, ingrese su nombre:");

// Solicitar al usuario que ingrese su apellido
let apellido1 = prompt("Por favor, ingrese su apellido:");

// Mostrar el nombre y apellido en la consola
console.log("Nombre: " + nombre1);
console.log("Apellido: " + apellido1);


//2)
// Solicitar al usuario que ingrese la primera nota
let nota1 = parseFloat(prompt("Ingrese la primera nota:"));

// Solicitar al usuario que ingrese la segunda nota
let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));

// Solicitar al usuario que ingrese la tercera nota
let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

// Calcular el promedio de las notas
let promedio = (nota1 + nota2 + nota3) / 3;

// Mostrar el promedio en la consola
console.log("El promedio de las notas es: " + promedio);

//3

// Solicitar al usuario que ingrese la longitud del primer lado del triángulo
let lado1 = parseFloat(prompt("Ingrese la longitud del primer lado del triángulo:"));

// Solicitar al usuario que ingrese la longitud del segundo lado del triángulo
let lado2 = parseFloat(prompt("Ingrese la longitud del segundo lado del triángulo:"));

// Solicitar al usuario que ingrese la longitud del tercer lado del triángulo
let lado3 = parseFloat(prompt("Ingrese la longitud del tercer lado del triángulo:"));

// Calcular el perímetro del triángulo
let perimetroTriangulo = lado1 + lado2 + lado3;

// Mostrar el perímetro en la consola
console.log("El perímetro del triángulo es: " + perimetroTriangulo);

//4)
// Solicitar al usuario que ingrese la longitud de un lado del cuadrado
let lado = parseFloat(prompt("Ingrese la longitud de un lado del cuadrado:"));

// Calcular el perímetro del cuadrado (la suma de los cuatro lados)
let perimetroCuadrado = 4 * lado;

// Calcular el área del cuadrado (lado * lado)
let areaCuadrado = lado * lado;

// Mostrar el perímetro y el área en la consola
console.log("El perímetro del cuadrado es: " + perimetroCuadrado);
console.log("El área del cuadrado es: " + areaCuadrado);

// 5)// Solicitar al usuario que ingrese la longitud del rectángulo
let longitud = parseFloat(prompt("Ingrese la longitud del rectángulo:"));

// Solicitar al usuario que ingrese el ancho del rectángulo
let ancho = parseFloat(prompt("Ingrese el ancho del rectángulo:"));

// Calcular el perímetro del rectángulo (2 * longitud + 2 * ancho)
let perimetroRectangulo = 2 * longitud + 2 * ancho;

// Calcular el área del rectángulo (longitud * ancho)
let areaRectangulo = longitud * ancho;

//Mostrar el perímetro y el area en la consola
console.log("El perímetro del rectángulo es: " + perimetroRectangulo + "  y el area del rectángulo es " + areaRectangulo)

// 6)// Solicitar al usuario que ingrese el primer número
let numero1 = parseInt(prompt("Ingrese el primer número:"));

// Solicitar al usuario que ingrese el segundo número
let numero2 = parseInt(prompt("Ingrese el segundo número:"));

// Calcular el resto de la división entera
let resto = numero1 % numero2;

// Mostrar el resto en la consola
console.log("El resto de la división entre " + numero1 + " y " + numero2 + " es: " + resto);

// 7)// Solicitar al usuario que ingrese su nombre
let nombre2 = prompt("Por favor, ingrese su nombre:");

// Solicitar al usuario que ingrese su apellido
let apellido2 = prompt("Por favor, ingrese su apellido:");

// Armar el mensaje personalizado
let mensaje = "Bienvenido, " + nombre2 + " " + apellido2 + "!";

// Mostrar el mensaje en la consola
console.log(mensaje);

// 8)// Valor de PI
let PI = 3.1416;

// Solicitar al usuario que ingrese el radio del círculo
let radio = parseFloat(prompt("Ingrese el radio del círculo:"));

// Calcular la circunferencia del círculo
let circunferencia = 2 * PI * radio;

// Calcular el área del círculo
let areaCirculo = PI * radio*radio;

// Mostrar la circunferencia y el área en la consola
console.log("La circunferencia del círculo es: " + circunferencia);
console.log("El área del círculo es: " + areaCirculo);



