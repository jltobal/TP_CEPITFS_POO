import { Servicios } from "./servicios";

export abstract class Habitacion {
    private numero: number;
    private estado: boolean;
    private precioBase: number;
    private servicio : Servicios[];

    public constructor(numero: number, estado: boolean, precioBase: number) {
        this.numero = numero;
        this.estado = estado;
        this.precioBase = precioBase;
        this.servicio = [];
    }

    public abstract reservar(): void;
    public abstract liberar(): void;
    public abstract getCostoTotal(): number;

    public setServicio(nuevoServicio : Servicios){
        this.servicio.push(nuevoServicio);
    }
    public getServicio(){
        return this.servicio;
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