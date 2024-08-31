var SingletonTs = /** @class */ (function () {
    function SingletonTs() {
        this.random = Math.random();
    }
    SingletonTs.getInstance = function () {
        if (!this.instance) {
            this.instance = new SingletonTs();
        }
        return SingletonTs.instance;
    };
    return SingletonTs;
}());
var singleton = SingletonTs.getInstance();
var singleton2 = SingletonTs.getInstance();
console.log(singleton === singleton2); // true, solo una instancia de la clase SingletonTs es creada en memoria.
console.log(singleton.random);
console.log(singleton2.random);
singleton.random = 7;
console.log(singleton.random); // 7
console.log(singleton2.random); // 7
