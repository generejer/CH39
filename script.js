/*Funciones 
Una funcion: es un bloque de código reutilizable en el cual vamos a tener un conjunto de instrucciones/tareas que podemos ejecutar las veces que sea requerido invocando dicha funcion

-Reutilizar codigo
-Modularizar  codigo 
-Podemos hacer pruebas en codigo espeficico

*/

/*Hoisting
Caracteristica de una función que nos permite invocarla antes de su inicializacion, es decir que se puede invacar antes del blo0que de codigo o despues*/

// Funciones por declaracion

function saludar() {   /*primero utilizamos la palabra reservada function para indicar lo que quiero, seguido del nombre de l funcion (Nombres acorde al contexto)y dentro de los parentesis agregamor los parametros/ argumentos necesarios */
    console.log("Holi crayoli"); //sentencia que se refiere a lo que quiero que realice mi funcion 
}

saludar(); //llamamos a la funcion


// Funciones que retornan un valor 

function deRetorno() { //utilizamos la palabra reservada function, loe asignamos un nombre y/o parametros
    return "Funcion que retorna"; //tenemos la sentencia 
}
console.log(deRetorno());//llamamos a la funcion 

function suma(a, b) {
    return a + b;
}

let resultado = suma(520, 380);
console.log(`El resultado de la suma es ${resultado}`);

//funciones flecha, es una manera de declarar una funcion sin la palabra serervada function 
const calcularCuadrado = (number) => {/*las vamos a declarar a traves de una variable y con => para identificar a la funcion flecha*/
    return number * number;
}
let resCuadrado = calcularCuadrado(5);
console.log(resCuadrado);//llamamos a la funcion 

/*Funciones anonimas, son funciones que no tienen un nombre pero que se pueden invocar a traves del nombre de la variable en la que se encuentran*/
const sinNombre = function(){
    return "Esto es una función anonima";
}
console.log(sinNombre());

//Callbacks es pasar una funcion a traves de un parametro a otra funcion (siempre va a ejecutar otra funcion, teniendo en cuenta ciertas condiciones)
const funcionB = function(){
    console.log("Esta es la función B");
}

const funcionA = function (callback){
    callback();
}
funcionA(funcionB);

/*Interpolacion de cadenas 
backticks `` 
${} llamara las variables*/

let nombre = "Fernanda";
let apellido = "Ramos";
let signo = "Tauro";

let mensaje = `Holi, "soy" 
${nombre}
 ${apellido} 
de la CH39 y mi signo es
 ${signo}`;

console.log(mensaje);
   