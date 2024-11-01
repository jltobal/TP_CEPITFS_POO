import { Servicios } from "./servicios";

export abstract class Habitacion {
    private numero: number;
    private estado: boolean;
    private precioBase: number;
    private servicios: Servicios[]; // Cambiado a plural

    public constructor(numero: number, estado: boolean, precioBase: number) {
        this.numero = numero;
        this.estado = estado;
        this.precioBase = precioBase;
        this.servicios = [];
    }

    public abstract reservar(): void;
    public abstract liberar(): void;
    public abstract getCostoTotal(): number;

    public setServicio(nuevoServicio: Servicios) {
        this.servicios.push(nuevoServicio);
    }

    public setServicios(nuevosServicios: Servicios[]) {
      
        this.servicios.push(...nuevosServicios);
    }

    public getServicios() { // Cambiado a plural
        return this.servicios;
    }

    public getNumero() {
        return this.numero;
    }

    public setNumero(numero: number) {
        this.numero = numero;
    }

    public getEstado() {
        return this.estado;
    }

    public setEstado(estado: boolean) {
        this.estado = estado;
    }

    public getPrecioBase() {
        return this.precioBase;
    }

    public setPrecioBase(precioBase: number) {
        this.precioBase = precioBase;
    }
}