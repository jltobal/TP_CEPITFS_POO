"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HabitacionSuite = void 0;
var habitacion_1 = require("./habitacion");
var HabitacionSuite = /** @class */ (function (_super) {
    __extends(HabitacionSuite, _super);
    function HabitacionSuite(numero, estado, precioBase, desayuno, allInclusive) {
        var _this = _super.call(this, numero, estado, precioBase) || this;
        _this.desayuno = desayuno;
        _this.allInclusive = allInclusive;
        return _this;
    }
    HabitacionSuite.prototype.reservar = function () {
        if (!this.getEstado()) {
            this.setEstado(true);
        }
        else {
            console.error("No se puede reservar la habitación porque ya está ocupada");
        }
    };
    HabitacionSuite.prototype.liberar = function () {
        if (this.getEstado()) {
            this.setEstado(false);
        }
        else {
            console.error("La habitación no está ocupada");
        }
    };
    HabitacionSuite.prototype.getCostoTotal = function () {
        var precio = this.getPrecioBase(); // Obtener precio base usando el método
        if (this.allInclusive) {
            precio *= 2; // 100% adicional por All Inclusive
        }
        else if (this.desayuno) {
            precio *= 1.20; // 20% adicional por desayuno
        }
        return precio * 1.21; // Se agrega 21% de IVA
    };
    return HabitacionSuite;
}(habitacion_1.Habitacion));
exports.HabitacionSuite = HabitacionSuite;
