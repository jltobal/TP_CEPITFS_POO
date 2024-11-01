import { Habitacion } from "./habitacion";
import { Servicios } from "./servicios";

export class HabitacionSuite extends Habitacion {
    private desayuno: boolean;
    private allInclusive: boolean;

    constructor(numero: number, estado: boolean, precioBase: number, servicios: Servicios[], desayuno: boolean, allInclusive: boolean) {
        super(numero, estado, precioBase);
        this.desayuno = desayuno;
        this.allInclusive = allInclusive;
        this.setServicios(servicios);
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

        if (this.allInclusive) {
            precio *= 2; // 100% adicional por All Inclusive
        } else if (this.desayuno) {
            precio *= 1.20; // 20% adicional por desayuno
        }

        // Agregar costo de servicios
        const costoServicios = this.getServicios().reduce((total, servicio) => total + servicio.precio, 0);
        precio += costoServicios;

        return precio * 1.21; // Se agrega 21% de IVA
    }
}