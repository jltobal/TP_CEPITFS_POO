"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var servicios_1 = require("./servicios");
var habitacionStandard_1 = require("./habitacionStandard");
var habitacionSuite_1 = require("./habitacionSuite");
console.log("inicio de programa");
var hab1 = new habitacionStandard_1.HabitacionStandard(1, false, 50, true); // Habitacion de Control
var hab2 = new habitacionSuite_1.HabitacionSuite(2, false, 150, [], false, true); // Habitacion de Control
var hab3 = new habitacionStandard_1.HabitacionStandard(3, true, 50, true);
var hab4 = new habitacionSuite_1.HabitacionSuite(4, false, 300, [], false, true);
var serviciosBasicos1 = [
    new servicios_1.Servicios("desayuno", 15),
    new servicios_1.Servicios("wifi", 20),
    new servicios_1.Servicios("limpieza", 10),
];
hab4.setServicios(serviciosBasicos1);
console.log(hab4.getServicios());
