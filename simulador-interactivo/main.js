//DESAFIO ENTREGABLE 1

// Calcular nota final de alumnos ingresados. 

// let nota1 = Number(prompt('ingrese nota 1:'));
// let nota2 = Number(prompt('ingrese nota 2:'));
// let nota3 = Number(prompt('ingrese nota 3:'));
// let nota4 = Number(prompt('ingrese nota 4:'));

// const sumaNotas = (nota1, nota2, nota3, nota4) => nota1 + nota2 + nota3 + nota4;

// const calcularPromedio = (totalNotas, cantNotas) => totalNotas / cantNotas; 

// let promedioNotas = calcularPromedio(sumaNotas(nota1, nota2, nota3, nota4), 4);

// console.log(promedioNotas);


//-----------------------------------------------proyecto final------------------------------------------------------


//Aplicacion Web: "Armonía familiar" - Lista de tareas: 

//Variables: 
const arrayTareas = [];

// const tarea ={
//     nombre: "",
//     descripcion: "",
//     seccion: "",
//     recurrencia: "",
//     responsable: ""
// }
class Tarea{
    constructor(nombre, descripcion, seccion, recurrencia, responsable) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.seccion = seccion;
        this.recurrencia = recurrencia;
        this.responsable = responsable;
    }
}


const agregarTarea = () => {
   //variables para agregar una nueva tarea:
    let nombreTarea = prompt('Ingrese nombre de la tarea:');
    let descripcionTarea = prompt('Ingrese descripcion de la tarea:');
    let seccionTarea = prompt('Ingrese nombre de la tarea:');
    let recurrenciaTarea = prompt('Ingrese la frecuencia de la tarea:');
    let responsableTarea = prompt('Ingrese el nombre del responsable de la tarea:');
    arrayTareas.push(new Tarea(nombreTarea, descripcionTarea, seccionTarea, recurrenciaTarea, responsableTarea));

}

const verListaTarea = () => {

}

const verStockAlimentos = () => {

}


let ingresoALaAplicacion = prompt('Bienvenido a la aplicacion web "Armonía Familiar", destinado a la organizacion y division de tareas equitativamente. ¿Que desea hacer? Ingrese: 1 para agregar una tarea, 2 para ver lista de tareas ó 3 para ver el stock dispoble de alimentos');

    switch (ingresoALaAplicacion) {
        case '1':
            agregarTarea();
            alert('Se agrego la nueva tarea con exito!' `${arrayTareas[arrayTareas.length-1]}` );
            break;
        case '2':
            verListaTarea();
            break;
        case '3':
            verStockAlimentos();
            break;

        default:
            break;
    }




