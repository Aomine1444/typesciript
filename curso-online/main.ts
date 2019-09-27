/**
 * se necesita resolver el siguiente problema
 * usando programacion orientada a objetos.
 * se desea realizar un sitema de  venta de cursos
 * oline como por ejemolo udemy,platzi,etc.
 * para ello se necesita imteractuar con estudiantes,
 * profesores de los mismos se necesita registrar su
 * informacion basica como nombre, apelido,correo, direccion;
 * por otra parte se necesita interactuar con los 
 * cursos que se impartiran de los mismos se necesita
 * registrar su precio, nombre , descripcion, finalmente
 * se desea guardar el registro de los estudiantes que 
 * compraron algun curso. un estudiante o profesor puede tener una o mas 
 * direcciones, al mismo tiempo una direccion esta compuesta por la 
 * siguiente informacion: ciudad, barrio, calle. 
 * para los profesores en particular se necesita guradar
 * su profesion.
 */
export class VentaCursosOnline {
    private nombre: string;
    private precio: number;
    private descripcion: string;
    public constructor(nom: string, pre: number, des: string) {
        this.nombre = nom;
        this.precio = pre;
        this.descripcion = des;
    }
}
export class estudiante {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private direccion: string[];
    public constructor(nom: string, ape: string, cor: string, direc: string[]) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = cor;
        this.direccion = direc;
    }
}
export class profesor {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private profecion: string;
    public constructor(nom: string, ape: string, cor: string, pro: string) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = cor;
        this.profecion = pro;
    }
}
export class direccion {
    private ciudad: string;
    private barrio: string;
    private calle: string;
    public constructor(ciu: string, ba: string, ca: string) {
        this.ciudad = ciu;
        this.barrio = ba;
        this.calle = ca;
    }
}
export class VentaCurso {
    private fecha: string;
    private nombre: string;
    public constructor (fe:string,nom:string){
        this.fecha = fe;
        this.nombre = nom;
    }
}