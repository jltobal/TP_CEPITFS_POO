"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servicios = void 0;
var Servicios = /** @class */ (function () {
    function Servicios(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    Servicios.prototype.getPrecio = function () {
        return this.precio;
    };
    Servicios.prototype.getNombre = function () {
        return this.nombre;
    };
    Servicios.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Servicios.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    return Servicios;
}());
exports.Servicios = Servicios;
