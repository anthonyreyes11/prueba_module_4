/*//elementos html
const input = document.querySelector('.input');
const agregar = document.querySelector('.boton-agregar');
const container = document.querySelector('.container');

agregar.addEventListener('click',function (ev) {
  console.log('funcionando');
})


class Item {
  constructor (nuevaTarea){
    this.CrearDiv(nuevaTarea)
  }
};

//elementos js
const inputItem = document.createElement('input');
inputItem.classList.add('inputItem');
inputItem.disabled = true;
inputItem.value = nuevaTarea;

const botonEditar = document.createElement('botonEditar');
botonEditar.classList.add('botonEditar');
botonEditar.innerHTML= '<i class="fa-solid fa-lock"></i>';

const botonRemover = document.createElement( 'botonRemover');
botonRemover.classList.add('botonRemover');
botonRemover.innerHTML= '<i class="fa-solid fa-trash-can"></i>';


function CrearDiv(nuevaTarea) {
  
  const div1 = document.createElement('div')
  div1.classList.add('item');
  div1.appendChild(inputItem);
  div1.appendChild(botonEditar);
  div1.appendChild(botonRemover);*/


let input = document.querySelector('.input');
let agregar = document.querySelector('.boton-agregar');
let container = document.querySelector('.container');
let lock = document.querySelectorAll('.botonEditar')





//creando clase
class Item {
  constructor(nuevaTarea) {
    this.crearDiv(nuevaTarea);
  }
  crearDiv(tarea) {
    //agregar div
    const divnuevo = document.createElement('div')
    //atributo del div
    divnuevo.classList.add('new-div')

    //atributo del input
    const createInput = document.createElement('input');
    createInput.setAttribute('type', 'text');
    createInput.setAttribute('disabled', 'true');

    createInput.value = tarea;
    divnuevo.appendChild(createInput);
    container.appendChild(divnuevo);

    // agregamos botón editar
    const botonEditar = document.createElement('button');
    botonEditar.classList.add('botonEditar');
    botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>';
    divnuevo.appendChild(botonEditar);

    // agregamos botón remover
    const botonRemover = document.createElement('button');
    botonRemover.classList.add('botonRemover');
    botonRemover.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    divnuevo.appendChild(botonRemover);

    botonEditar.addEventListener('click', function () {

      console.log('funcionando editar');

      // pregunto si está habilitDO O no el input
      if (createInput.disabled){
        createInput.disabled = false
        botonEditar.innerHTML =  "<i class='fa-solid fa-lock-open'></i>"
      }
      else{
        createInput.disabled = true
        botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>'
      }
    })

    botonRemover.addEventListener('click', function () {
      console.log('funcionando remover');
      let borrar = localStorage.removeItem('tareas')
      container.removeChild(divnuevo);
      
    })
  }
}

agregar.addEventListener('click', chequearInput)



function chequearInput() {
  if (input.value.trim() === ('')) {
    alert('Debe ingresar una tarea')
  } else {
    saveTask(input.value)
    let x = new Item(input.value) 
    input.value = ''
  }
}

input.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    chequearInput()
  }
});

function saveTask(task) {
  let localTasks = localStorage.getItem('tareas') || '[]';
  localTasks = JSON.parse(localTasks)
  localTasks.push(task);
  localTasks = JSON.stringify(localTasks);
  localStorage.setItem('tareas', localTasks)

}
// aplicar los datos guardados en la pagina
function init (){
  let array = (localStorage.getItem('tareas'));
  array = JSON.parse(array)
for (let i = 0; i < array.length; i++) {
  const addTask = new Item(array[i])
}
}
init()




