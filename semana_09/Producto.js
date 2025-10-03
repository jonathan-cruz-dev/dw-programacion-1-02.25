class Producto {
    nombre='';
    precio=''; // Precio sin iva
    fecha=''; // mes
    cantidad=0;
    constructor(nombre, precio, fecha, cantidad){
        this.nombre = nombre;
        this.fecha = fecha;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    total(){
        return (this.cantidad * this.precio);
    }
    vender(){ // descuenta 1 unidad
        this.cantidad = this.cantidad - 1;
    }
    verificarFecha(fechaActual){
        if( this.fecha < fechaActual){
            return 'Vencido'
        } else {
            return 'Ok'
        }
    }
    obtenerPrecioFinal(){
        let precionFinal = this.precio + (this.precio * 0.21);
        return precionFinal;
    }
}

let fechaActual = '10';

const p1 = new Producto('Fideos', 1000, 11, 100);
const p2 = new Producto('Jugo', 1400, 9, 25);
const p3 = new Producto('Alfajor', 750, 12, 60);
console.log(p1)
console.log(` El total de ${ p1.nombre} es ${ p1.total()}`);
p1.vender();
console.log(` El total de ${ p1.nombre} es ${ p1.total()}`);

console.log(` El estado del producto ${p1.nombre} está ${p1.verificarFecha(fechaActual)}`);
console.log(` El estado del producto ${p2.nombre} está ${p2.verificarFecha(fechaActual)}`);

console.log('El total es: ')
console.log( p1.total() )
