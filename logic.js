/*Crear un programa en PSeInt o JavaScript que realice lo siguiente:

    Debe solicitar al usuario 3 números y guardarlos.
    Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
    Debe imprimir los números ordenados de mayor a menor, y de menor a mayor.
    Debe ser capaz de identificar si los números son iguales e imprimir un mensaje diciendo que los números son iguales.

Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:

    4, 4, 2.

    4, 4, 2.
    2, 4, 4.

    4, 2, 4.

    4, 4, 2.
    2, 4, 4.

    2, 4, 4.

    4, 4, 2.
    2, 4, 4.*/

let numeros = [];

for (let i = 0; i < 3; i++) {
    numeros[i] = parseInt(prompt("ingrese un numero"));
}

orderNumbers();

function orderNumbers() {

    for (let h = 0; h < numeros.length; h++) {
        for (let n = 0; n < numeros.length; n++) {
            let num = numeros[n]

            if (numeros[n] < numeros[n + 1]) {
                numeros[n] = numeros[n + 1];
                numeros[n + 1] = num;
            }
        }
    }
}


function numEquals(array) {

    /*let resultado = (array[0] === array[1] || array[0] === array[2]) && (array[1] === array[2]) 
    ? "el numero " + array[0] + " esta repetido" : "el numero " + array[1] + " esta repetido";
    return resultado;*/

    //Evalua si hay numeros repetidos
    if(array[0] === array[1] || array[0] === array[2]){
            console.log("el numero "+array[0]+" esta repetido");
    }else if(array[1] === array[2]){
        console.log("el numero "+array[1]+" esta repetido");
    }else{
        console.log("No hay numeros repetidos")
    }
}


console.log(numeros + "\n" + numeros.reverse());
console.log(numEquals(numeros));


