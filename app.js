
//Variables

const input = document.querySelector('#input');
const btnAgregar = document.querySelector('.btn-add');
const tareaUl = document.querySelector('.li-conteiner ul')
const empty = document.querySelector('.empty');
const deletAll = document.querySelector('.btn-deletToo');

let texto = [];

//Adevenlistener
evenlistener()
function evenlistener() {
    //Al hacer click al boton de agregar
    btnAgregar.addEventListener('click', agregarTarea);

    //Caundo el documento este listo
    document.addEventListener('DOMContentLoaded', () => {
        texto = JSON.parse(localStorage.getItem('texto') || []); //Cuando recargue el documento traeremos los datos al Array, si no hay datos le asignamos un Array vacio
        
        // Creamos el HTML del Array
        crearHTML(); 
    }) 

    //Al hacer click al boton de borrar todo
    deletAll.addEventListener('click', borrarTodo);

}


//Funciones
function agregarTarea(e) {
    e.preventDefault();
    
    //Obtenemos el valor del texto
    tarea = input.value;


    //Validacion
    if (tarea === '') {
        validacionTexto('No agrego ninguna tarea ')
        return
    }

    //Guardar la tarea en OBJ para el Array
    const tareaObj = {
        id: Date.now(), //
        tarea 
    }

    //Agrega al Array
    texto = [...texto, tareaObj];
  

    //Crea el HTML de tareas 
    crearHTML()

    //Renicia el input a cada click al formulario
    const formulario = document.querySelector('.search form')
    formulario.reset();

    //Validacion del Emty

}

function validacionTexto(error) {
    //Identificamos el conteiner
    const empty = document.querySelector('.empty');

    //Crear HTML 
    const p = document.createElement('p');
    //agregamos classe
    p.classList.add('error');
    //agregamos Texto
    p.textContent = error;
    const divValidacion = document.querySelector('.validacion');
    //agregamos al conteiner
    divValidacion.appendChild(p);

    //En 3s se elimina el texto de validacion
    setTimeout(() => { 
        divValidacion.removeChild(p);
    }, 3000);
}

function crearHTML() {

    limpiarHTML()
    
    if (texto.length > 0) {        
        texto.forEach( (texto) => { //Por cada contenido del array generara el HTML 
            
            //crear html
            const li = document.createElement('li');
            const p = document.createElement('p');
            //agregamos su valor
            p.textContent = texto.tarea;
            //juntamos el li con la p
            li.appendChild(p);
            //Insertamos en el html
            tareaUl.appendChild(li);

            //Crear el boton delet 
            const btnD = document.createElement('button');
            btnD.classList.add('btn-delet')
            btnD.textContent = 'X';
            li.appendChild(btnD);

            btnD.onclick = () => {
                borrandoTexto(texto.id);
                crearHTML(); // vuelve a llamar la funcion para leer el Array
            }
            
            //Bloquea la vista del empty
            empty.style.display = 'none'
        })
    }else{
        //desbloquea la vista del empty
        empty.style.display = 'block'
    }
    sincronizarLocalStorage();
}


function borrandoTexto(id) {
    texto = texto.filter( texto => texto.id !== id)
    console.log(texto);
}

function borrarTodo() {

    // texto = [];
    //De la posicion 0 eliminamos la cantidad que hay en el Array
    texto.splice(0, texto.length)
    crearHTML();

}

function sincronizarLocalStorage() {
    localStorage.setItem('texto', JSON.stringify(texto));
}

function limpiarHTML() { //Hace que no se repita el codigo

    while (tareaUl.firstChild) {
       tareaUl.removeChild(tareaUl.firstChild); 
    } //Este codigo limpia todo el html, se fija si tiene hijo y si tiene elimina 1 por 1 limpiando el html 
}