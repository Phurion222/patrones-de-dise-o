var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Clase
var Vehiculo3 = /** @class */ (function () {
    function Vehiculo3(color, puertas, llantas, ventanas) {
        this.color = color;
        this.puertas = puertas;
        this.llantas = llantas;
        this.ventanas = ventanas;
    }
    Vehiculo3.prototype.mostrarInformacion = function () {
        return "El veh\u00EDculo es de color ".concat(this.color, ", tiene ").concat(this.puertas, " puertas, ").concat(this.llantas, " llantas y ").concat(this.ventanas, " ventanas.");
    };
    return Vehiculo3;
}());
var vehiculo = new Vehiculo3("Negro", 4, 4, 4);
console.log(vehiculo.mostrarInformacion());
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(color, puertas, llantas, ventanas, motor, precio) {
        var _this = _super.call(this, color, puertas, llantas, ventanas) || this;
        _this.motor = motor;
        _this.precio = precio;
        return _this;
    }
    Auto.prototype.mostrarInformacion = function () {
        return "".concat(_super.prototype.mostrarInformacion.call(this), " y tiene un motor de tipo ").concat(this.motor);
    };
    Auto.prototype.getPrice = function () {
        return "$" + this.precio;
    };
    return Auto;
}(Vehiculo3));
var auto = new Auto("Rojo", 4, 4, 4, "Gasolina", 200000);
console.log(auto.mostrarInformacion());
//Implementacion de interfaz
var Snack = /** @class */ (function () {
    function Snack(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    Snack.prototype.getPrice = function () {
        return "El precio es de $" + this.precio;
    };
    return Snack;
}());
//Arreglo de productos
var productos = [
    new Snack("Papitas", 5),
    new Snack("Dulce", 2),
    new Snack("Chocolate", 8),
    new Snack("Jugo", 10),
    new Auto("Negro", 4, 4, 4, "Gasolina", 200000)
];
function getPrecios(items) {
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        console.log(item.getPrice());
    }
}
getPrecios(productos);
