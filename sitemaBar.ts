export class Bar {
    nombre: string;
    capacidad: number;
    constructor(nom: string, cap: number) {
        this.nombre = nom;
        this.capacidad = cap;
    }
}
export class BarMan {
    nombre: string;
    apellido: string;
    constructor(Nom: string, Ape: string) {
        this.nombre = Nom;
        this.apellido = Ape;
    }
}
export class Trago {
    nombre: string;
    color: string
    cantidad: number;
    constructor(_nombre:string,_color:string,_cantidad:number){
        this.nombre = _nombre;
        this.color = _color;
        this.cantidad = _cantidad;
    }
}
let bar1: Bar = new Bar("nuevaera", 50);
let bar2: Bar = new Bar("el patio", 200);
let barMan1: BarMan = new BarMan("nikolas","Galindo");
let barMan2: BarMan = new BarMan("nigel","Galindo");
let Trago1: Trago = new Trago("fernet con Coca","verde oscuro",500);
let Trago2: Trago = new Trago("brandy","azul",500);
let Trago3: Trago = new Trago("vodka","cafe claro",500);

console.log(bar1);
console.log(bar2);
console.log(barMan1);
console.log(barMan2);
console.log(Trago1);
console.log(Trago2);
console.log(Trago3);
