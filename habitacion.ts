
export abstract class Habitacion {
    protected numero: number;
    protected estado: boolean;
    protected precioBase: number;
    public constructor(numero: number, estado: boolean, precioBase: number) {
        this.numero = numero;
        this.estado = estado;
        this.precioBase = precioBase;
    }
    public abstract reservar(): void;
    public abstract liberar(): void;
    public abstract getCostoTotal(): number;
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