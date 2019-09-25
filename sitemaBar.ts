export class Bar {
    private nombre: string;
    private capacidad: number;
    constructor(nom: string, cap: number) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    public setNombre(nom: string): void {
        this.nombre = nom;

    }
    public setCapacidad(cap: number): void {
        this.capacidad = cap;
    }
    public getCapacidad(): number {
        return this.capacidad;
    }
    public getNombre(): string {
        return this.nombre;
    }

}
export class BarMan {
    private nombre: string;
    private apellido: string;
    constructor(nom: string, ape: string) {
        this.nombre = nom;
        this.apellido = ape;
    }
    public setNombre(nom: string): void {
        this.nombre = nom
    }
    public setApellido(Ape: string): void {
        this.apellido = Ape;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getApellido(): string {
        return this.apellido;
    }
}
export class Trago {
    private nombre: string;
    private color: string;
    private cantidad: number;
    constructor(_nombre: string, _color: string, _cantidad: number) {
        this.nombre = _nombre;
        this.color = _color;
        this.cantidad = _cantidad;
    }
    public setCantidad(_cantidad: number) {
        this.cantidad = _cantidad;
    }
    public setNombre(_nombre: string): void {
        this.nombre = _nombre;
    }
    public getCantidad(): number {
        return this.cantidad;
    }
    public getNombre(): string {
        return this.nombre;
    }
}
let bar1: Bar = new Bar("nueva era", 50);
let bar2: Bar = new Bar("el patio", 200);
let barMan1: BarMan = new BarMan("nikolas", "Galindo");
let barMan2: BarMan = new BarMan("nigel", "Galindo");
let Trago1: Trago = new Trago("fernet con Coca", "verde oscuro", 500);
let Trago2: Trago = new Trago("brandy", "azul", 500);
let Trago3: Trago = new Trago("vodka", "cafe claro", 500);

console.log(bar1);
console.log(bar2);
console.log(barMan1);
console.log(barMan2);
console.log(Trago1);
console.log(Trago2);
console.log(Trago3);
bar2.setNombre("oasis");
console.log(bar2.getNombre());
bar2.setCapacidad(70);
console.log(bar2.getCapacidad());

barMan2.setApellido("Gonzalo");
console.log(barMan2.getApellido());
barMan2.setNombre("pedro");
console.log(barMan2.getNombre());

Trago1.setCantidad(600);
console.log(Trago1.getCantidad());
Trago1.setNombre("mojito");
console.log(Trago1.getNombre());