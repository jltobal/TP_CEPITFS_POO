
export class Servicios{
    public nombre:string;
    public precio:number;

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