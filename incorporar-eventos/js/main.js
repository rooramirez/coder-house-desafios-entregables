//Aplicacion Web: "Armonía familiar" - Lista de tareas: 

//Variables: 
let ingresoALaAplicacion;
let arrayTareas = [];
let arrayCompras = [];

const form = document.getElementById('formTarea');
let container = document.getElementById('tareas');
let divContainer = document.getElementById('divDeTareas');

const renderTareas = () => {
    //-----------DOM--------
    divContainer.innerHTML = '';
    arrayTareas = obtenerTareasLocalStorage();
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
//--------almacenar las listas en el local storage---------
const guardarTareasLocalStorage = (arrayTareas) => {
    localStorage.setItem('arrayTareas', JSON.stringify(arrayTareas));
};
//-----fin de almacenamiento en el localstorage---

///----obtener los datos en el local storage----
const obtenerTareasLocalStorage = () => {
    const tareaStorage = JSON.parse(localStorage.getItem('arrayTareas'));
    return tareaStorage || [];
};
//--------fin de la funcion obtener datos storage-----

//-------Obtener valores del formulario y mostrarlo----------

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
    renderTareas();

}
renderTareas();

//-------borra el texto que quedo en el formulario----
document.getElementById('formTarea').reset();

///--------agrego un evento click------
divContainer.addEventListener('click', (e) => {
    eliminarTarea(e.target.value);
});

//-----eliminar una tarea----------

const eliminarTarea = (nombre) => {
    arrayTareas.forEach((tarea, index) => {
        if(tarea.nombre === nombre){
            arrayTareas.splice(index, 1);
        }
        guardarTareasLocalStorage(arrayTareas);
    });
    renderTareas();
}

///-----------------COMPRAS------------------

const renderCompras = () => {
    //-----------DOM-------
    divContainerCompra.innerHTML = '';
    arrayCompras = obtenerComprasLocalStorage();
    arrayCompras.forEach( compra => {
        let divCompra = document.createElement('div');
        divCompra.classList.add('elementoLista');
        divCompra.innerHTML = `
        <p>Producto: ${compra.producto}</p>
        <p>Tipo de producto: ${compra.tipo}</p>
        <button class="btn btn-danger" name="delete" value="${compra.producto}">Borrar</button>
        `
        divContainerCompra.appendChild(divCompra);
        containerCompra.appendChild(divContainerCompra);
    });
    //---------fin DOM ------
}

//--------almacenar las listas en el local storage---------
const guardarComprasLocalStorage = (arrayCompras) => {
    localStorage.setItem('arrayCompras', JSON.stringify(arrayCompras));
};
//----fin  de almacenamiento-------

///----obtener los datos en el local storage----
const obtenerComprasLocalStorage = () => {
    const compraStorage = JSON.parse(localStorage.getItem('arrayCompras'));
    return compraStorage || [];
};
//--------fin de la funcion obtener datos storage-----

///-----obtener el valor del formulario y mostrarlo------
const formCompra = document.getElementById('formCompra');
let containerCompra = document.getElementById('compras');
let divContainerCompra = document.getElementById('divDeCompras');

const valorFormularioCompra = (e) => {
    e.preventDefault();

    const formulario = new FormData(formCompra);
    const nombreProducto = formulario.get('nombreProducto');
    const tipoProducto = formulario.get('tipoProducto');

    console.log(nombreProducto);
    console.log(tipoProducto);

    arrayCompras.push(new Compras(nombreProducto, tipoProducto));
    guardarComprasLocalStorage(arrayCompras);
    renderCompras();
}

//------se agrega un evento al form----
formCompra.addEventListener('submit', valorFormularioCompra);
renderCompras();

//-------borra el texto que quedo en el formulario----
document.getElementById('formCompra').reset();

///--------agrego un evento click------

divContainerCompra.addEventListener('click', (e) => {
    eliminarCompra(e.target.value);
});

// //-------agregar tarea al DOM----
// document.addEventListener('DOMContentLoaded', () =>{
//     if (localStorage.getItem('arrayTareas')) {
//        arrayTareas = obtenerTareasLocalStorage();
//     }
// });

//-----eliminar una Compra----------
const eliminarCompra = (producto) => {
    arrayCompras.forEach((compra, index) => {
        if(compra.producto === producto){
            arrayCompras.splice(index, 1);
        }
        guardarComprasLocalStorage(arrayCompras);
    });
    renderCompras();
}
