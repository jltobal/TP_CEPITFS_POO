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
exports.HabitacionStandard = void 0;
var habitacion_1 = require("./habitacion");
var HabitacionStandard = /** @class */ (function (_super) {
    __extends(HabitacionStandard, _super);
    function HabitacionStandard(numero, estado, precioBase, limpieza) {
        var _this = _super.call(this, numero, estado, precioBase) || this;
        _this.iva = 1.21;
        _this.limpieza = limpieza;
        return _this;
    }
    HabitacionStandard.prototype.reservar = function () {
        if (!this.getEstado()) {
            this.setEstado(true);
        }
        else {
            console.error("No se puede reservar la habitación porque ya está ocupada");
        }
    };
    HabitacionStandard.prototype.liberar = function () {
        if (this.getEstado()) {
            this.setEstado(false);
        }
        else {
            console.error("La habitación no está ocupada");
        }
    };
    HabitacionStandard.prototype.getCostoTotal = function () {
        var precio = this.getPrecioBase();
        if (this.limpieza) {
            precio *= 1.10; // 10% adicional de limpieza
        }
        return precio * this.iva; // Se agrega 21% de IVA
    };
    return HabitacionStandard;
}(habitacion_1.Habitacion));
exports.HabitacionStandard = HabitacionStandard;
