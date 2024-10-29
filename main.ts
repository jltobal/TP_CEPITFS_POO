import { Habitacion } from "./habitacion";
import { Servicios } from "./servicios";
import { HabitacionStandard } from "./habitacionStandard";
import { HabitacionSuite } from "./habitacionSuite";

console.log ("inicio de programa");

const hab1 = new HabitacionStandard(1, false, 50, true); // Habitacion de Control
const hab2 = new HabitacionSuite(2, false, 150, false, true); // Habitacion de Control
const hab3 = new HabitacionStandard(3, true, 50, true);
const hab4 = new HabitacionSuite(4, false, 300, false, true);
const servicio1 = new Servicios("limpieza", 10);

hab1.setServicio(new Servicios("wifi", 20));
hab1.setServicio(servicio1);
hab3.setServicio(servicio1);

console.log(hab1.getServicio());
console.log(hab3.getServicio());

