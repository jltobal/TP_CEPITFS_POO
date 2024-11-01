import { Servicios } from "./servicios";

export class ServiciosBasicos{

    private servicio : Servicios[];

    constructor(){
        this.servicio=[];
    }

    public setServicio(nuevoServicio : Servicios){
        this.servicio.push(nuevoServicio);
    }
    public getServicio(){
        return this.servicio;
    }


}