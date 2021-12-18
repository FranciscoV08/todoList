
//Variables

const inputTarea = document.querySelector('.input');
const btnAgregar = document.querySelector('.btn-add');
const tareaUl = document.querySelector('.li-conteiner ul')
const empty = document.querySelector('.empty');



//adEvenlistener
btnAgregar.addEventListener('click', guardarValor);



//Funciones 
function guardarValor(e) {
    e.preventDefault();

    //Obtenemos el valor del inpur
    const text = input.value;
    if (text !== '') {
    
        //Creamos el HTMl
        const li = document.createElement('li');
        const p = document.createElement('p');
        
        //Agregamos su contenido
        p.textContent = text;
    
        //Agregamos a sus correspondiente
        li.appendChild(p);
        li.appendChild(btnDelete())
        tareaUl.appendChild(li);
        
        input.value = '';
        empty.style.display = 'none';
    }

}

function btnDelete() {
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'X';
    deleteBtn.className = 'btn-delete';

    deleteBtn.addEventListener('click', (e) => {
        const itemPadre = e.target.parentElement;
        console.log(itemPadre)
        tareaUl.removeChild(itemPadre);
        
        const items = document.querySelectorAll('li');
        if(items.length === 0){
            empty.style.display = 'block';
        } 
    })
    return deleteBtn;
}

//Tarea
//Guardar los datos en una base de datos como tarea 
//Boton de Borrar todo, implementar un bucle y llamar en un listener mediante un bucle eliminar todo los li