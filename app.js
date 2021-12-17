const agregarTarea = document.querySelector('#input');
const btn = document.querySelector('.btn-add');
const tareasPendientes = document.querySelector('.list-ul ul')

let tarea = "";

eventosListener();

function eventosListener() {
    // Eventos que registramos
    //boton de +
    btn.addEventListener('click', btnTarea);   

    // input, como no es mucho codigo lo escribimos aqui
    agregarTarea.addEventListener('input', (e) => { //Registra lo que escribimos en el Input
        tarea = e.target.value;
    });
}

//Crea los elementos Li y button
function btnTarea(e) {
    e.preventDefault();
    const idContenedor = 0;

    // Creamos el div que contenga los 2 elementos
    const contenedorDiv = document.createElement('div');
    contenedorDiv.classList.add(`${idContenedor}`  )

    contenedorDiv.innerHTML = ` 
    <li>${tarea}</li>

    `;

    //Creamos la lista que contendra e
    // const texto = document.createElement('li');
    // texto.textContent = `${tarea}`; 

    //Creamos el botton
    const deletBtn = document.createElement('button')
    deletBtn.textContent = 'X'
    deletBtn.classList.add('btn-delet')

    //Agregamos al HTML
    // contenedorDiv.appendChild(texto)
    contenedorDiv.appendChild(deletBtn)

    tareasPendientes.appendChild(contenedorDiv)



    
    
    
}

// if (tareasPendientes.children) {
//     btnBorrarTarea()
// }
//  function btnBorrarTarea() {
//      const btnX = document.querySelector('.btn-delet')
//      btnX.addEventListener('click', () => { //Evento que borre la tarea
       
//      })
//  }

