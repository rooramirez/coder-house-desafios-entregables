
//-----------------------------------------------proyecto final------------------------------------------------------


//Aplicacion Web: "Armonía familiar" - Lista de tareas: 

//Variables: 
let ingresoALaAplicacion;
let arrayTareas = [];
let arrayCompras = [];

//-------Obtener valores del formulario y mostrarlo----------
const form = document.getElementById('formTarea');

form.addEventListener('submit', valorFormulario);

function valorFormulario(e) {
    e.preventDefault();

    const formulario = new FormData(form);
    const nombre = formulario.get('nombreTarea');
    const descripcion = formulario.get('descripcion');

    console.log(nombre);
    console.log(descripcion);

    arrayTareas.push(new Tarea(nombre, descripcion));

     //-----------DOM--------

    let container = document.getElementById('tareas');
    let divContainer = document.getElementById('divDeTareas');

    divContainer.innerHTML = '';

    arrayTareas.forEach( tarea => {
        let divTarea = document.createElement('div');
        divTarea.classList.add('elementoLista');
        divTarea.innerHTML = `
        <p>Nombre de la tarea: ${tarea.nombre}.</p>
        <p>Descripcion  de la tarea: ${tarea.descripcion}.</p>
        <p>Seccion  de la tarea: ${tarea.seccion}.</p>
        <p>Frecuencia  de la tarea: ${tarea.frecuencia}.</p>
        <p>Responsable  de la tarea: ${tarea.responsable}.</p>
        `

        divContainer.appendChild(divTarea);
        container.appendChild(divTarea);
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
        container.appendChild(divCompra);
    });
    //---------fin DOM ------
}
formCompra.addEventListener('submit', valorFormularioCompra);


