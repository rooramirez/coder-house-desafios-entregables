///-----------------COMPRAS------------------
let arrayCompras = [];
let divContainerCompra = document.getElementById('divDeCompras');
let containerCompra = document.getElementById('compras');

const renderCompras = () => {
    //-----------DOM-------
    divContainerCompra.innerHTML = '';
    arrayCompras = obtenerComprasLocalStorage();
    arrayCompras.forEach( compra => {

        let divCompra = document.createElement('div');
        let { producto, tipo, compraMensual } = compra;
        divCompra.classList.add('elementoLista');
        divCompra.innerHTML = `
        <p>Producto: ${producto}</p>
        <p>Tipo de producto: ${tipo}</p>
        <p>Compra mensual: ${compraMensual}</p>
        <button class="btn btn-danger" id="${producto}" name="delete" value="${producto}">Borrar</button>
        `
        divContainerCompra.appendChild(divCompra);
        containerCompra.appendChild(divContainerCompra);

         //---------- sweetAlert

         const btn = document.getElementById(producto);

         btn.addEventListener('click', () => {
             Swal.fire({
                 title: 'Estas seguro?',
                 text: 'va a eliminar compra',
                 icon: 'warning',
                 showCancelButton: true,
                 confirmButtonText: 'Eliminar',
                 cancelButtonText: 'Cancelar'
             }).then((result) => {
                 if (result.isConfirmed) {
                     eliminarCompra(producto);
                     Swal.fire(
                         'Eliminado',
                         'La compra ha sido borrada',
                         'success'
                     )
                 }
             })
         })

         const btnCargarComprasMensuales = document.getElementById('cargarComprasMes');
         const divFechaCompra = document.getElementById('fechaCargaCompra');
    //---------fin DOM ------
    }
    )
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


const valorFormularioCompra = (e) => {
    e.preventDefault();

    const formulario = new FormData(formCompra);
    const nombreProducto = formulario.get('nombreProducto');
    const tipoProducto = formulario.get('tipoProducto');

    arrayCompras.push(new Compras(nombreProducto, tipoProducto, false));
    guardarComprasLocalStorage(arrayCompras);
    renderCompras();
    //-------borra el texto que quedo en el formulario----
    formCompra.reset();
    btnGuardarCompra.disabled = true;
}

//------se agrega un evento al form----
formCompra.addEventListener('submit', valorFormularioCompra);
renderCompras();

//-----eliminar una Compra----------
const eliminarCompra = (producto) => {
    arrayCompras.forEach((compra, index) => {
        if(compra.producto === producto){
            arrayCompras.splice(index, 1);
        }
        guardarComprasLocalStorage(arrayCompras);
    });
    renderCompras();
};

//-------Validar form compra---------
const btnGuardarCompra = document.getElementById('btnGuardarCompra');
const inputNombreCompra = document.getElementById('inputNombreCompra');
const inputTipoProducto = document.getElementById('inputTipoProducto');

btnGuardarCompra.disabled = true;

const verificarFormVacio = () => {
    
    const x = inputNombreCompra.value === '' ? true : false;
    const y = inputTipoProducto.value === '' ? true : false;
    btnGuardarCompra.disabled = x || y;
};

//-------------se agrega un evento al al form (validar formulario)---------
formCompra.addEventListener('keyup', verificarFormVacio);

//Rutas relativas-fetch

const funcionFetch = () => {
    fetch('/productosMensuales.json')
        .then((response) => response.json())
        .then((data) => {
            //evitar que se agregue la compra mensual reiteradas veces seguidas
            let bandera = false;
            arrayCompras.forEach( compra => {
                if (compra && compra.compraMensual) {
                    bandera = true;
                }
            })
            if (!bandera) {
                
                data.listaProductosMensual.forEach(producto => {
                    arrayCompras.push(new Compras(producto.nombreProducto, producto.tipoProducto, producto.compraMensual));
                    
                })
                guardarComprasLocalStorage(arrayCompras);
                renderCompras();
                
            } else { //sweetAlert
                Swal.fire({
                    title: 'No se puede volver agregar productos de la lista de compras mensual',
                    text: 'se agrega una sola vez al mes',
                    icon: 'warning',
                });
                // ---fin sweetAlert
            }
        });
        
}

//agrego evento para renderizar lista compras
const btnCargarComprasMensuales = document.getElementById('cargarComprasMes');

btnCargarComprasMensuales.addEventListener('click', funcionFetch);


