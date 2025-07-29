// Operadores

// Operadores Aritmeticos

let a = 5
let b = 10

console.log(a + b)//Suma
console.log(a - b )//Resta
console.log(a * b )//Multiplicacion
console.log(a / b ) //Division

console.log(a % b ) //Modulo
console.log(a ** b)//Exponente

a++ //Incremento
console.log(a)

b-- //Decremento
console.log(b)

//Operadores de asignacion

let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

//Operadores de comparacion

console.log(a)


console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 6) // Igualdad por valor
console.log(a == "6") //igualdad por valor
console.log(a === a) //Igualdad por identidad (por tipo y valor)
console.log(a === 6)
console.log(a === "6")
console.log(a != 6)
console.log(a !== "6")
console.log( 0 == false)
console.log( 1 == false)
console.log( 2 == false)
console.log( 0 == " ")
console.log( 0 == ' ')
console.log( 0 == " Hola ")
console.log( 0 === " ")
console.log( undefined == null)
console.log( undefined === null) 

// Truthy values (valores verdaderos)

// Todos ñps numeros positivos y negativos menos cero
// Todas las cadenas de texto menos las vacios
// El Booleano true

// Falsy values (valores falsos)
// 0
// 0n
// null
// undefined
// NaN
// El Booleano false
// Cadenas de texto vacias


// Operadores logicos

// and se representa de la siguiente manera (&&)
console.log( 5 > 10 && 15 > 20)
console.log( 5 < 10 && 15 < 20)
console.log( 5 < 10 && 15 > 20)
console.log( 5 > 10 && 15 > 20 && 30 > 40)

// or se representa de la siguiente manera (||)
console.log( 5 > 10 || 15 > 20)
console.log( 5 < 10 || 15 < 20)
console.log( 5 < 10 || 15 > 20)
console.log( 5 > 10 || 15 > 20 || 30 > 40)

console.log( 5 > 10 && 15 > 20 || 30 > 40)
console.log( 5 > 10 && 15 > 20 || 30 < 40)

// not (!)
console.log(!true)
console.log(!false)
console.log( !(5 > 10 && 15 > 20))
console.log( !(5 > 10 || 15 > 20))

// Operadores ternarios permiten escribir una condicion

const isRaining = true
isRaining ?  console.log("Esta llovendo") : console.log("Noesta llovendo")