
//-----------------------------------------------proyecto final------------------------------------------------------


//Aplicacion Web: "Armonía familiar" - Lista de tareas: 

//Variables: 
let ingresoALaAplicacion;
let arrayTareas = [];
let arrayCompras = [];

//declaracion de clase constructora Tarea
class Tarea{
    constructor(nombre, descripcion, seccion, frecuencia, responsable) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.seccion = seccion;
        this.frecuencia = frecuencia;
        this.responsable = responsable;
    }

    verTarea() {
        return `NUEVA TAREA: 
        \n nombre: ${this.nombre}
        \n descripcion: ${this.descripcion}
        \n seccion: ${this.seccion}
        \n frecuencia: ${this.frecuencia}
        \n responsable: ${this.responsable}`;
    }
}

//declaracion de clase constructora Stock: 
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

// funciones: 

const agregarTarea = () => {
   //variables para agregar una nueva tarea:
    let nombreTarea = prompt('Ingrese nombre de la tarea:');
    let descripcionTarea = prompt('Ingrese descripcion de la tarea:');
    let seccionTarea = prompt('Ingrese tipo/ seccion de tarea:');
    let frecuenciaTarea = prompt('Ingrese la frecuencia de la tarea:');
    let responsableTarea = prompt('Ingrese el responsable de la tarea:');
    arrayTareas.push(new Tarea(nombreTarea, descripcionTarea, seccionTarea, frecuenciaTarea, responsableTarea));
}

const verListaTarea = () => {
    console.log(arrayTareas);
}

//funcion para eliminar elemento de la lista:

// const modificarListaTarea = () => {
//     let eliminarElemento = prompt('para eliminar una tarea, indique el nombre de la misma:');
//     for (const tarea of  arrayTareas) {
//         if(tarea.nombre === eliminarElemento){
//             let indexTarea = arrayTareas.indexOf(tarea);
//             arrayTareas.splice(indexTarea, 1);
//             console.log(`se modifico con exito la lista de tareas`);
//             console.log(arrayTareas);
//         }
//     }
// }
//---------------------------fin de la funcion-----------

//funcion de orden superior para eliminar tarea de la lista:
const arrayTareasCompletadas = [];
const eliminarTarea = () => {

    let tareaAEliminar = prompt('para eliminar una tarea, indique el nombre de la misma:');
    arrayTareas = arrayTareas.filter(tarea => {
        if(tarea.nombre === tareaAEliminar){
            arrayTareasCompletadas.push(tarea);
            return false;
        }
        return true;
        });
    console.log(arrayTareas);    

}

//-----fin de la funcion de orden superior-----

const agregarElementoAListaCompras = () => {
    let producto = prompt('Ingrese nombre del producto:');
    let tipoProducto = prompt('Ingrese tipo de producto:');
    arrayCompras.push(new Compras(producto, tipoProducto));
}

const verListaCompras = () => {
    console.log(arrayCompras);
}

// const modificarListaCompras = () => {
//     let modificarLista = prompt('Para eliminar una compra, indique producto es de la misma:');

//     for (const compra of arrayCompras) {
//         if(compra.producto === modificarLista){
//             let indexCompras = arrayCompras.indexOf(compra);
//             console.log(indexCompras);
//             arrayCompras.splice(indexCompras, 1);
//             console.log(arrayCompras);
//             console.log(`se modifico con exito la lista de compras ${arrayCompras}`);
//         }
//     }
// }

//f/////////uncion de orden superior:
const arrayProductosEliminados = [];

const modificarListaCompras = () => {
    let eliminarProducto = prompt('Para eliminar una compra, indique producto es de la misma:');
    arrayCompras = arrayCompras.filter(compra => {
        if(compra.producto === eliminarProducto){
            arrayProductosEliminados.push(compra);
            return false;
        }
        return true;
    });
    console.log(arrayCompras);
}
////////fin de la funcion de orden superior///////////
//inicio de la aplicacion:
let bienvenida = console.log('Bienvenido a la aplicacion web "Armonía Familiar", destinado a la organizacion y division de tareas equitativamente.');

while (ingresoALaAplicacion != 0) {
    ingresoALaAplicacion = Number(prompt('¿Que desea hacer? Ingrese: \n 1 para agregar una tarea, \n 2 para ver lista de tareas, \n 3 para modificar la lista de tareas, \n 4 para agregar un elemento a la lista de compras, \n 5 para ver la lista de compras, \n 6 para modificar la lista de compras \n o ingrese 0 (cero) para finalizar el programa.'));
    
    switch (ingresoALaAplicacion) {
        case 1:
            agregarTarea();
            console.log(`Se agrego la nueva tarea con exito! ${arrayTareas[arrayTareas.length-1].verTarea()}`);
            break;
        case 2:
            if (arrayTareas.length === 0) {
                console.log('aun no hay ninguna tarea en la lista, se encuentra vacía');
            }
            else{
                verListaTarea();
            }
            break;
        case 3:
            if (arrayTareas.length === 0) {
                console.log('aun no hay ninguna tarea en la lista, se encuentra vacía');
            }
            else{
                eliminarTarea();
                alert('la tarea se borro con exito y se agrego a la lista de tareas realizadas');
                console.log(`tareas realizadas: `);
                console.log(arrayTareasCompletadas);
            } 
            break;
        case 4:
            agregarElementoAListaCompras();
            console.log(`Se agrego el elemento a la lista de compras con exito! ${arrayCompras[arrayCompras.length-1].verListaCompras()}`);
            break;
        case 5:
            if (arrayCompras.length === 0) {
                console.log('aun no hay ningun elemento en la lista de Compras, se encuentra vacía');
            }
            else{
                verListaCompras();
            }
            break;
        case 6:
            if (arrayCompras.length === 0) {
                console.log('aun no hay ningun elemento en la lista de Compras, se encuentra vacía');
            }
            else{
                modificarListaCompras();
                alert('el producto se borro con exito y se agrego a la lista de productos eliminados');
                console.log(`productos eliminados: `);
                console.log(arrayProductosEliminados);
            }
            break;
        default:
            console.log('La opcion ingresada es incorrecta, repitala nuevamente');
            break;
        }

}
