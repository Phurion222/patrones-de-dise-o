function sum (a, b){
     return a + b;
}

let res = sum(1, 2);
console.log(res);

//Funcion de primer orden: Cuando asignamos una funcion a una variable para ser ejecutada posteriormente.
const fSum = sum;
res = fSum(5, 6);
console.log(res);

//Funcion de orden superior: Cuando una funcion puede recibir otra funcion como parametro
function operation(fn, a, b){
     console.log("se hace algo");
     console.log(fn(a, b));
}

operation(sum, 10, 20);

//Arrow function: Es una funcion anonima que se alamacena en una variable
let fA = function(){
     console.log("Funcion anonima");
}
fA();

const Af = () => console.log("Arrow function");
Af();

//Forma simple cuando no se requiere mas de una linea Nota: Cuando no hay llaves no es necesario el return
operation((a,b) => a*b, 5, 5);

//Forma extendida cuando se requieren varias lineas de codigo, es necesario retornar el valor.
operation((a,b) =>{
     const c = a + b;
     return c * 2;
}, 5, 5);

//Foreach inmutable
const names = ["Hector", "Carlos", "Jhon", "Ana"]
names.forEach((nombre) => console.log(nombre));
names.forEach((nombre) => nombre.toUpperCase());
console.log(names);

//Mutables
names.sort();
console.log(names);

//Map: no modifica los valores originales si no que regresa un nuevo arreglo con las modificaciones realizadas
const namesUpper = names.map((nombre) => nombre.toUpperCase());
console.log(namesUpper);

//Reduce: reduce devuelve un solo valor que es el resultado de aplicar una función a cada elemento de un array (en este caso, a cada numero)
const numbers = [5,4,7,1,10];
//ac es el acumulado, n es el valor numerico de cada iteracion y 0 es el valor inicial del acumulado y es opcional
const total = numbers.reduce((ac, n) => {
     return ac + n;
}, 0);
console.log(total);

//Programacion orientada a objetos
//Clase
//--Una clase es la representacion de codigo de un objeto tangible de la vida real como por ejemplo un carro
//--El carro tiene metodos (funcionalidades) como manejar (Acelerar, frentar, direccion, etc.), cargar combustible, etc.
//--El carro tiene propiedades (atributos) como el color, numero de puertas, llantas, ventanas, aire acondicionado, etc.
class Vehiculo{
     constructor(color, puertas, llantas, ventanas){
          this.color = color;
          this.puertas = puertas;
          this.llantas = llantas;
          this.ventanas = ventanas;
     }
     acelerar(){
          return "El vehiculo " + this.color + " acelera";
     }
}

const miVehiculo = new Vehiculo("Rojo", 4, 4, 6);
console.log(miVehiculo.acelerar());
console.log(miVehiculo.color);

//Funcional
function Vehiculo2(color, puertas, llantas, ventanas) {
     this.color = color;
     this.puertas = puertas;
     this.llantas = llantas;
     this.ventanas = ventanas;
     this.acelerar = function() {
          return "El vehiculo " + this.color + " acelera";
     }
}

const miVehiculo2 = new Vehiculo2("Azul", 4, 4, 6);
console.log(miVehiculo2.acelerar());
console.log(miVehiculo2.color);

//Herencia
class Carro extends Vehiculo {
     constructor(color, puertas, llantas, ventanas, motor) {
          super(color, puertas, llantas, ventanas);
          this.motor = motor;
     }

     //Sobrescribir acelerar
     acelerar() {
          return super.acelerar() + " con motor de tipo " + this.motor
     }
}

const miCarro = new Carro("Negro", 4, 4, 6, "Electrico");
console.log(miCarro.acelerar());