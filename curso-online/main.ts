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
export class Curso {
    private curso: string;
    private precio: number;
    private descripcion: string;
    private profesor: Profesor;
    public constructor(nom: string, pre: number, des: string, pro: Profesor) {
        this.curso = nom;
        this.precio = pre;
        this.descripcion = des;
        this.profesor = pro;
    }
}
export class Estudiante {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private direccion: Direccion;
    public constructor(nom: string, ape: string, cor: string, direc: Direccion) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = cor;
        this.direccion = direc;
    }
}
export class Profesor {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private profecion: string;
    private direccion: Direccion[];
    public constructor(nom: string, ape: string, cor: string, pro: string, direc: Direccion[]) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = cor;
        this.profecion = pro;
    }
}
export class Direccion {
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
    private curso: Curso;
    private estudiante: Estudiante;
    public constructor(fe: string, cu: Curso, est: Estudiante, ) {
        this.fecha = fe;
        this.curso = cu;
        this.estudiante = est;
    }
}
/**
 * crear 5 instancias de clase curso
 * crear 10 intancias de clase estudiante
 * crear 2 intancias de la clase docente
 * com mas de 2 direcciones.
 * crear 12 intancias de compracurso.
 * hecer correr y verifivar el correcto
 * funcionamiento de las clases implementadas.
 * subir al repositorio.
 */
/////////////////Direcciones////////////
let direccionpro1: Direccion = new Direccion("CBBa", "pacata", "baja");
let direccionpro2: Direccion = new Direccion("CBBA", "tarija", "circumbalacion");
let direccionpro3: Direccion = new Direccion("CBBA", "sacaba", "esmeralda");
let direccionpro4: Direccion = new Direccion("CBBA", "sacaba", "amancallas");

let direccion1: Direccion = new Direccion("CBBA", "arocagua", "pacata");
let direccion2: Direccion = new Direccion("CBBA", "sacaba", "esmeralda");
let direccion3: Direccion = new Direccion("CBBA", "sacaba", "pacata");
let direccion4: Direccion = new Direccion("CBBA", "circumbalacion", "pacata");
let direccion5: Direccion = new Direccion("CBBA", "arocagua", "maxfernades");
let direccion6: Direccion = new Direccion("CBBA", "plaza tarija", "circumbalacion");
let direccion7: Direccion = new Direccion("CBBA", "", "");
let direccion8: Direccion = new Direccion("CBBA", "", "");
let direccion9: Direccion = new Direccion("CBBA", "", "");
let direccion10: Direccion = new Direccion("CBBA", "Av.armerica", "circumbalacion");
//console.log(direccion1);
////////////////estudiantes//////////////////////
let estudiante1: Estudiante = new Estudiante("juanito", "Perez", "jp@tucartera.com", direccion1);
let estudiante2: Estudiante = new Estudiante("alfredo", "Gimenes", "ag@tucartera.com", direccion2);
let estudiante3: Estudiante = new Estudiante("nigel", "Galindo", "ng@tucartera.com", direccion3);
let estudiante4: Estudiante = new Estudiante("favio", "Imaca", "fi@tucartera.com", direccion4);
let estudiante5: Estudiante = new Estudiante("juan", "Vellido", "jv@tucartera.com", direccion5);
let estudiante6: Estudiante = new Estudiante("ruben", "Gonzales", "rg@tucartera.com", direccion6);
let estudiante7: Estudiante = new Estudiante("marco", "Miranda", "Mm@tucartera.com", direccion7);
let estudiante8: Estudiante = new Estudiante("samuel", "Garcia", "sg@tucartera.com", direccion8);
let estudiante9: Estudiante = new Estudiante("mytziu", "Zambrana", "mz@tucartera.com", direccion9);
let estudiante10: Estudiante = new Estudiante("miky", "Michele", "mM@tucartera.com", direccion10);
console.log(estudiante1);
/////////profesores////////
let profesor1: Profesor = new Profesor("niko", "Galindo", "NG@tucartera.com", "programador", [direccionpro1, direccionpro2]);
let profesor2: Profesor = new Profesor("niko", "Galindo", "GN@tucartera.com", "programador", [direccionpro3, direccionpro4]);
console.log(profesor1);
////////////////cursos///////////
let curso1: Curso = new Curso("pycon", 30, "es buena", profesor1);
let curso2: Curso = new Curso("matamaticas", 25, "exelente", profesor2);
let curso3: Curso = new Curso("ciencias", 35, "exelente", profesor1);
let curso4: Curso = new Curso("leguaje", 20, "exelente", profesor2);
let curso5: Curso = new Curso("historia", 15, "exelente", profesor1);
console.log(curso5);
/////////// venta de cursos///////////
let VentaCurso1: VentaCurso = new VentaCurso("27/9/2019", curso5, estudiante10);
let VentaCurso2: VentaCurso = new VentaCurso("27/9/2019", curso1, estudiante1);
let VentaCurso3: VentaCurso = new VentaCurso("27/9/2019", curso3, estudiante4);
let VentaCurso4: VentaCurso = new VentaCurso("27/9/2019", curso5, estudiante7);
let VentaCurso5: VentaCurso = new VentaCurso("27/9/2019", curso4, estudiante8);
let VentaCurso6: VentaCurso = new VentaCurso("27/9/2019", curso2, estudiante2);
let VentaCurso7: VentaCurso = new VentaCurso("27/9/2019", curso3, estudiante5);
let VentaCurso8: VentaCurso = new VentaCurso("27/9/2019", curso1, estudiante10);
let VentaCurso9: VentaCurso = new VentaCurso("27/9/2019", curso5, estudiante4);
let VentaCurso10: VentaCurso = new VentaCurso("27/9/2019", curso4, estudiante3);
let VentaCurso11: VentaCurso = new VentaCurso("27/9/2019", curso2, estudiante6);
let VentaCurso12: VentaCurso = new VentaCurso("27/9/2019", curso3, estudiante9);
console.log(VentaCurso1);
