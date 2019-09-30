
/**
 * crear la clase PlataformaEducativa la 
 * misma debe tener el nombre de la 
 * plataforma educativa,lista donde se debe
 * guardar el registro de los cursos comprados.
 * -la  clase PlataformaEducativa debe
 * contener un metodo que sirva para 
 * registrar la venta de cursos,el
 * metodo debe recibir como
 * arguemnto (parametro de entrada).una 
 * instancia de clase CompraCurso.
 * --crear un metodo dentro de la clase
 * PlataformaEducativa que retorne la el
 * total de ingresos percibidos por la
 * venta de cursos online.*/


/**
 * resuelva el siguiente problema usando programacion orientada
 * en objetos y herencia:se necesita implementar un
 * sistemapara la venta de pelicukas en formatos cd,dvd,blu-ray.donde debe
 * estar involucrado el cliente.
 * se debe guardar cds,dvdvs,blu-rays en una misma lista.
 * se debe poder calcular el monto total percivido por la venta de cds.
 * se deve poder calcular el monto total percivido por la venta de blu-rays.
 * de deve poder calcular el monto total percivido por la venta de cds,blu-rays,dvds y
 * los 3 tipos de discos deben guardar una lista. 
 *  */
export class Disco {
    private tipo: string;
    private cliente: string;
    private precio: number;
    public constructor(tip: string, cli: string, pre: number) {
        this.tipo = tip;
        this.cliente = cli;
        this.precio = pre;

    }
    public getTipo(): string {
        return this.tipo;
    }
    public getCliente(): string {
        return this.cliente;
    }
    public getPrecio(): number {
        return this.precio;
    }
}
export class cd extends Disco {
    public constructor(tip: string, cli: string, pre: number) {
        super(tip, cli, pre);
    }

}
export class dvd extends Disco {
    public constructor(tip: string, cli: string, pre: number) {
        super(tip, cli, pre);
    }
}
export class Bluray extends Disco {
    public constructor(tip: string, cli: string, pre: number) {
        super(tip, cli, pre);
    }
}
console.log();
