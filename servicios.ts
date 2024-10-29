
export class Servicios{
    private nombre:string;
    private precio:number;

    constructor(nombre:string, precio:number){
        this.nombre = nombre;
        this.precio = precio;
    }

    public getPrecio(){
        return this.precio;
    }
    public getNombre(){
        return this.nombre;
    }
    public setNombre(nombre:string){
        this.nombre = nombre;
    }
    public setPrecio(precio:number){
        this.precio = precio;
    }


}