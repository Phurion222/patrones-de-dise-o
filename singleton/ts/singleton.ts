class SingletonTs{
     private static instance: SingletonTs;
     random: number;

     private constructor(){
          this.random = Math.random();
     }

     public static getInstance(): SingletonTs{
          if(!this.instance){
               this.instance = new SingletonTs();
          }
          return SingletonTs.instance;
     }
}

const singleton = SingletonTs.getInstance();
const singleton2 = SingletonTs.getInstance();

console.log(singleton === singleton2); // true, solo una instancia de la clase SingletonTs es creada en memoria.
console.log(singleton.random);
console.log(singleton2.random); 

singleton.random = 7;

console.log(singleton.random); // 7
console.log(singleton2.random); // 7