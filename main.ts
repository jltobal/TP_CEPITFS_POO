import { Habitacion } from "./habitacion";
import { Servicios } from "./servicios";
import { HabitacionStandard } from "./habitacionStandard";
import { HabitacionSuite } from "./habitacionSuite";
import { ServiciosBasicos } from "./serviciosBasicos";

console.log ("inicio de programa");

const hab1 = new HabitacionStandard(1, false, 50, true); // Habitacion de Control
const hab2 = new HabitacionSuite(2, false, 150, [], false, true, ); // Habitacion de Control
const hab3 = new HabitacionStandard(3, true, 50, true);
const hab4 = new HabitacionSuite(4, false, 300, [], false, true);

const serviciosBasicos1 = [
    new Servicios("desayuno", 15),
    new Servicios("wifi", 20),
    new Servicios("limpieza", 10),
]

const servicioPremium = new Servicios("Starlink", 45);


hab4.setServicios(serviciosBasicos1);
hab4.getCostoTotal();
hab4.setServicio(servicioPremium);

console.log(hab4.getServicios());
hab4.getCostoTotal();

console.log("pepito");


