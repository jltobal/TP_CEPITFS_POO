import { Habitacion } from "./habitacion";
import { HabitacionStandard } from "./habitacionStandard";
import { HabitacionSuite } from "./habitacionSuite";

console.log ("inicio de programa");

const hab1 = new HabitacionStandard(1,false, 50, true);
const hab2 = new HabitacionSuite(2, false, 250, false, true);
const hab3 = new HabitacionStandard(3,true, 50, true);
const hab4 = new HabitacionSuite(4, false, 300, false, true);