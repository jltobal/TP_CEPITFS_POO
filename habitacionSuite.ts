import { Habitacion } from "./habitacion";

class HabitacionSuite extends Habitacion{

    protected desayuno : boolean;
    protected allInclusive : boolean;

    constructor(numero: number, estado: boolean, precioBase: number, desayuno : boolean, allInclusive : boolean){
        super(numero, estado, precioBase);
        this.desayuno = desayuno;
        this.allInclusive = allInclusive;
    }

    public reservar(): void {
        if (this.estado == false){
            this.estado = true;
        }
    }

    public liberar(): void {
        if (this.estado == true){
            this.estado = false;
        }
    }

    public getCostoTotal(): number {
        let precio = 0;
        if(this.allInclusive){
            this.precioBase = this.precioBase * 2; // 100% adicional de All inclusive
        }else if(this.desayuno == true){
            this.precioBase = this.precioBase *1.20; // 20% adicional de desayuno
        }
        
        precio = this.precioBase * 1.21; //Se agrega 21% de IVA
        return precio;
    }

}