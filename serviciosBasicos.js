"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiciosBasicos = void 0;
var ServiciosBasicos = /** @class */ (function () {
    function ServiciosBasicos() {
        this.servicio = [];
    }
    ServiciosBasicos.prototype.setServicio = function (nuevoServicio) {
        this.servicio.push(nuevoServicio);
    };
    ServiciosBasicos.prototype.getServicio = function () {
        return this.servicio;
    };
    return ServiciosBasicos;
}());
exports.ServiciosBasicos = ServiciosBasicos;
