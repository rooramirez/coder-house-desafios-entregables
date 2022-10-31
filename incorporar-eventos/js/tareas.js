//Variables:
let arrayTareas = [];

//---luxon----
const DateTime = luxon.DateTime;
const Interval = luxon.Interval;

const form = document.getElementById('formTarea');
let container = document.getElementById('tareas');
let divContainer = document.getElementById('divDeTareas');

const renderTareas = () => {
    //-----------DOM--------
    divContainer.innerHTML = '';
    arrayTareas = obtenerTareasLocalStorage();
    arrayTareas.forEach( tarea => {
        let divTarea = document.createElement('div');
        let { nombre, descripcion, importancia, fechaLimite } = tarea;

        const fechaFormularioArray = fechaLimite.split('-').map(item => Number(item));
        const [year, month, day] = fechaFormularioArray;
        fechaLimite = DateTime.local(year, month, day)
        let hoy = DateTime.now();
        let intervaloDiasRestantes = Interval.fromDateTimes(hoy, fechaLimite)
            diasRestantes = Math.ceil(intervaloDiasRestantes.length('days'));

        if( intervaloDiasRestantes.invalid ) {
            diasRestantes = 0;
        }
        divTarea.classList.add(`${importancia}`);
        divTarea.classList.add('elementoLista');
        divTarea.innerHTML = `
        <p>Nombre de la tarea: ${nombre}.</p>
        <p>Descripcion  de la tarea: ${descripcion}.</p>
        <p>Importancia de la tarea: ${importancia}.</p>
        <p>Dias restantes para finalizar la tarea: ${diasRestantes}.</p>
        <button class="btn btn-secondary" name="delete" id="${nombre}" value="${nombre}">Borrar</button>
        `
        divContainer.appendChild(divTarea);
        container.appendChild(divContainer);

         //---------- sweetAlert

        const btn = document.getElementById(nombre);

        btn.addEventListener('click', () => {
            Swal.fire({
                title: 'Estas seguro?',
                text: 'va a eliminar la tarea',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    eliminarTarea(nombre);
                    Swal.fire(
                        'Eliminado',
                        'La tarea ha sido borrada',
                        'success'
                    )
                }
            })
        })
        //---fin sweetAlert
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
    const importancia = formulario.get('nivelImportancia');
    const fechaLimite = formulario.get('fechaTarea');
    
    arrayTareas.push(new Tarea(nombre, descripcion, importancia, fechaLimite));
    guardarTareasLocalStorage(arrayTareas);
    renderTareas();
    //-------borra el texto que quedo en el formulario----
    form.reset();
    btnGuardarTarea.disabled = true;
}

renderTareas();

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

//-------validar form tareas-----------

const btnGuardarTarea = document.getElementById('btnGuardarTarea');
const inputNombreTarea = document.getElementById('tareaNombre');
const inputDescripcion = document.getElementById('descripcionTarea');

btnGuardarTarea.disabled = true;

const validarFormTarea = () => {
    const x = inputNombreTarea.value === '' ? true : false;
    const y = inputDescripcion.value === '' ? true : false;
    btnGuardarTarea.disabled = x || y;
}

///////------------se agrega un evento al form Tarea (validar form)-------------
form.addEventListener('keyup', validarFormTarea);

///-------fin de validacion del formulario-------------
