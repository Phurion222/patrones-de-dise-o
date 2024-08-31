//Clase
class Vehiculo3 {

     private color: string;
     private puertas: number;
     private llantas: number;
     private ventanas: number;

     constructor(color: string, puertas: number, llantas: number, ventanas: number){
          this.color = color;
          this.puertas = puertas;
          this.llantas = llantas;
          this.ventanas = ventanas;
     }
     
     public mostrarInformacion(): String {
          return `El vehículo es de color ${this.color}, tiene ${this.puertas} puertas, ${this.llantas} llantas y ${this.ventanas} ventanas.`;
     }

}

const vehiculo = new Vehiculo3("Negro", 4, 4, 4);
console.log( vehiculo.mostrarInformacion() );

//Herencia
// class Auto extends Vehiculo3 {
//      private motor: string;

//      constructor(color: string, puertas: number, llantas: number, ventanas: number, motor: string){
//           super(color, puertas, llantas, ventanas);
//           this.motor = motor;
//      }
     
//      public mostrarInformacion(): String {
//           return `${super.mostrarInformacion()} y tiene un motor de tipo ${this.motor}`;
//      }

// }

// const auto = new Auto("Rojo", 4, 4, 4, "Gasolina");
// console.log(auto.mostrarInformacion());

//Iterface: Nos permite categorizar objetos. Que los objetos puedan tener un comportamiento esperado (Contrato).
interface Producto {
     precio: number;
     getPrice(): String;
}

class Auto extends Vehiculo3 implements Producto{
     private motor: string;
     precio: number;

     constructor(color: string, puertas: number, llantas: number, ventanas: number, motor: string, precio: number){
          super(color, puertas, llantas, ventanas);
          this.motor = motor;
          this.precio = precio;
     }
     
     public mostrarInformacion(): String {
          return `${super.mostrarInformacion()} y tiene un motor de tipo ${this.motor}`;
     }

     getPrice(): String {
         return "$" + this.precio;
     }

}

const auto = new Auto("Rojo", 4, 4, 4, "Gasolina", 200000);
console.log(auto.mostrarInformacion());

//Implementacion de interfaz
class Snack implements Producto {

     nombre: string;
     precio: number;

     constructor(nombre: string, precio: number){
          this.nombre = nombre;
          this.precio = precio;
     }

     getPrice(): String {
         return "El precio es de $" + this.precio;
     }
}

//Arreglo de productos
const productos: Producto[] = [
     new Snack("Papitas", 5),
     new Snack("Dulce", 2),
     new Snack("Chocolate", 8),
     new Snack("Jugo", 10),
     new Auto("Negro", 4, 4, 4, "Gasolina", 200000)
];

//Al establecer el contrato de Product sobre una clase o arreglo nos estamos 
//asegurando que el objeto que estamos construyendo cumpla con ciertas reglas
//de tal manera que el codigo correra de forma seguro en caso de que realizemos
//algo como buscar los precios de una lista de objetos en este caso de tipo producto
//En js esto no se verifica por lo que truena en tiempo de ejecucion ya que en tiempo 
//de compilacion no se valida que las metodos que vamos a buscar o ejecutar existan.
function getPrecios(items: Producto[]){
     for(const item of items){
          console.log(item.getPrice());
     }
}

getPrecios(productos);