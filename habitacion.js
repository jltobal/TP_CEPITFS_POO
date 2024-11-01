"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Habitacion = void 0;
var Habitacion = /** @class */ (function () {
    function Habitacion(numero, estado, precioBase) {
        this.numero = numero;
        this.estado = estado;
        this.precioBase = precioBase;
        this.servicios = [];
    }
    Habitacion.prototype.setServicio = function (nuevoServicio) {
        this.servicios.push(nuevoServicio);
    };
    Habitacion.prototype.setServicios = function (nuevosServicios) {
        var _a;
        (_a = this.servicios).push.apply(_a, nuevosServicios);
    };
    Habitacion.prototype.getServicios = function () {
        return this.servicios;
    };
    Habitacion.prototype.getNumero = function () {
        return this.numero;
    };
    Habitacion.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Habitacion.prototype.getEstado = function () {
        return this.estado;
    };
    Habitacion.prototype.setEstado = function (estado) {
        this.estado = estado;
    };
    Habitacion.prototype.getPrecioBase = function () {
        return this.precioBase;
    };
    Habitacion.prototype.setPrecioBase = function (precioBase) {
        this.precioBase = precioBase;
    };
    return Habitacion;
}());
exports.Habitacion = Habitacion;
