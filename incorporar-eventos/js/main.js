//Aplicacion Web: "Armonía familiar" - Lista de tareas: 

//Variables: 
let ingresoALaAplicacion;
let arrayTareas = [];
let arrayCompras = [];

//--------almacenar las listas en el local storage---------
const guardarTareasLocalStorage = (arrayTareas) => {
    localStorage.setItem('arrayTareas', JSON.stringify(arrayTareas));
};

///----obtener los datos en el local storage----
// const obtenerTareasLocalStorage = () => {
//     const tareaStorage = JSON.parse(localStorage.getItem('arrayTareas'));
//     return tareaStorage;
// };
//--------fin de la funcion obtener datos storage-----

//-------Obtener valores del formulario y mostrarlo----------
const form = document.getElementById('formTarea');
let container = document.getElementById('tareas');
let divContainer = document.getElementById('divDeTareas');

form.addEventListener('submit', valorFormulario);

function valorFormulario(e) {
    e.preventDefault();

    const formulario = new FormData(form);
    const nombre = formulario.get('nombreTarea');
    const descripcion = formulario.get('descripcion');

    console.log(nombre);
    console.log(descripcion);

    arrayTareas.push(new Tarea(nombre, descripcion));
    guardarTareasLocalStorage(arrayTareas);

     //-----------DOM--------
    divContainer.innerHTML = '';

    arrayTareas.forEach( tarea => {
        let divTarea = document.createElement('div');
        divTarea.classList.add('elementoLista');
        divTarea.innerHTML = `
        <p>Nombre de la tarea: ${tarea.nombre}.</p>
        <p>Descripcion  de la tarea: ${tarea.descripcion}.</p>
        <button class="btn btn-danger" name="delete" value="${tarea.nombre}">Borrar</button>
        `

        divContainer.appendChild(divTarea);
        container.appendChild(divContainer);
    });
 //-------------fin del DOM-------
}

///-----obtener el valor del formulario y mostrarlo------
const formCompra = document.getElementById('formCompra');

const valorFormularioCompra = (e) => {
    e.preventDefault();

    const formulario = new FormData(formCompra);
    const nombreProducto = formulario.get('nombreProducto');
    const tipoProducto = formulario.get('tipoProducto');

    console.log(nombreProducto);
    console.log(tipoProducto);

    arrayCompras.push(new Compras(nombreProducto, tipoProducto));

    //-----------DOM-------
    let container = document.getElementById('compras');
    let divContainer = document.getElementById('divDeCompras');

    divContainer.innerHTML = '';

    arrayCompras.forEach( compra => {
        let divCompra = document.createElement('div');
        divCompra.classList.add('elementoLista');
        divCompra.innerHTML = `
        <p>Producto: ${compra.producto}</p>
        <p>Tipo de producto: ${compra.tipo}</p>
        `
        divContainer.appendChild(divCompra);
        container.appendChild(divContainer);
    });
    //---------fin DOM ------
}

//------se agrega un evento al form----
formCompra.addEventListener('submit', valorFormularioCompra);

//-------borra el texto que quedo en el formulario----
document.getElementById('formTarea').reset();

///--------agrego un evento click------
divContainer.addEventListener('click', (e) => {
    eliminarTarea(e.target.value);
})

// //-------agregar tarea al DOM----
// document.addEventListener('DOMContentLoaded', () =>{
//     if (localStorage.getItem('arrayTareas')) {
//        arrayTareas = obtenerTareasLocalStorage();
//     }
// });

//-----eliminar una tarea----------

const eliminarTarea = (nombre) => {
   arrayTareas = arrayTareas.forEach((tarea, index) => {
        if(tarea.nombre === nombre){
            arrayTareas.splice(index, 1);
        }
    });
}
