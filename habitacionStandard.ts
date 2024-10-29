import { Habitacion } from "./habitacion";
import { Servicios } from "./servicios";

export class HabitacionStandard extends Habitacion {

    private limpieza: boolean;
    private iva: number = 1.21;

    constructor(numero: number, estado: boolean, precioBase: number, limpieza: boolean) {
        super(numero, estado, precioBase);
        this.limpieza = limpieza;
    }

    public reservar(): void {
        if (!this.getEstado()) {
            this.setEstado(true);
        } else {
            console.error("No se puede reservar la habitación porque ya está ocupada");
        }
    }

    public liberar(): void {
        if (this.getEstado()) {
            this.setEstado(false);
        } else {
            console.error("La habitación no está ocupada");
        }
    }

    public getCostoTotal(): number {
        let precio = this.getPrecioBase();
        if (this.limpieza) {
            precio *= 1.10; // 10% adicional de limpieza
        }
        return precio * this.iva; // Se agrega 21% de IVA
    }
}
