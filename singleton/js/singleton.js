class Singleton {

     //Por medio del contructor
     constructor() {
          this.random = Math.random();

          //Bloque de codigo que gantiza que solo se cree un objeto
          if (Singleton.instance) {
               console.log("Ya existe");
               return Singleton.instance;
          }

          console.log("No existe y se crea");
          Singleton.instance = this;
          //Termina bloque de codigo
     }

     //Por medio de metodo
     static getInstance() {
          return Singleton.instance;
     }

}

const singleton = new Singleton();
const singleton2 = new Singleton();
const singleton3 = Singleton.instance;

console.log(singleton === singleton2); // Debería ser true, ya que es el mismo objeto. 
console.log(singleton.random);
console.log(singleton2.random);
console.log(singleton3.random);


//Patron CREACIONAL, utilizado para la crear objetos de persistencia de ojetos no mutables como calendario, dias de la semana, etc.
class WeekDays {
     daysEs = [
          "Lunes",
          "Martes",
          "Miércoles",
          "Jueves",
          "Viernes",
          "Sábado",
          "Domingo"
     ];

     daysEn = [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
     ];

     constructor(language) {
          this.language = language;

          if (WeekDays.instance) {
               return WeekDays.instance;
          }

          WeekDays.instance = this;
     }

     getDays() {
          return this.language === "es" ? this.daysEs : this.daysEn;
     }

}

const weekDays = new WeekDays('es');
const weekDays2 = new WeekDays('en');

console.log(weekDays.getDays()); // Debería imprimir los días en inglés
console.log(weekDays2.getDays()); 