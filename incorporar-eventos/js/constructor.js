
//declaracion de clase constructora Tarea
class Tarea{
    constructor(nombre, descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        // this.seccion = seccion;
        // this.frecuencia = frecuencia;
        // this.responsable = responsable;
    }

    // verTarea() {
    //     return `NUEVA TAREA:
    //     \n nombre: ${this.nombre}
    //     \n descripcion: ${this.descripcion}
    //     // \n seccion: ${this.seccion}
    //     // \n frecuencia: ${this.frecuencia}
    //     // \n responsable: ${this.responsable}`;
    // }
}

//declaracion de clase constructora Compras:
class Compras{
    constructor(producto, tipo){
        this.producto = producto;
        this.tipo = tipo;
    }

    verListaCompras() {
        return `LISTA DE COMPRAS:
        \n nombre del producto: ${this.producto}
        \n Tipo: ${this.tipo}`
    }
}
