"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var servicios_1 = require("./servicios");
var habitacionStandard_1 = require("./habitacionStandard");
var habitacionSuite_1 = require("./habitacionSuite");
console.log("inicio de programa");
var hab1 = new habitacionStandard_1.HabitacionStandard(1, false, 50, true); // Habitacion de Control
var hab2 = new habitacionSuite_1.HabitacionSuite(2, false, 150, false, true); // Habitacion de Control
var hab3 = new habitacionStandard_1.HabitacionStandard(3, true, 50, true);
var hab4 = new habitacionSuite_1.HabitacionSuite(4, false, 300, false, true);
var servicio1 = new servicios_1.Servicios("limpieza", 10);
hab1.setServicio(new servicios_1.Servicios("wifi", 20));
hab1.setServicio(servicio1);
hab3.setServicio(servicio1);
console.log(hab1.getServicio());
console.log(hab3.getServicio());
