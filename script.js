/*
    Funcion que recibe un numero y devuelve un array con las dos mitades
    si el numero es impar, el segundo valor del array tiene que el mas alto
*/

function numberSplit ( num ) {
    return [Math.floor(num/2), Math.ceil(num/2)];

    /*
        con Math.floor devolvemos el numero entero menor
        con Math.ceil devolvemos el numero entero mayor    

        Ejemplo
        11 / 2 = 5.5 con floor() 5.5, el numero entero menor seria 5 y con ceil
        5.5 el numero entero mayor seria 6

    */
}

let response = numberSplit(11); // [5,6] resultado
console.log("🚀 ~ file: script.js:16 ~ response:", response)
