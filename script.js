let numeroTarea = 0;

function mostrarPantalla(id) {
    const pantallas = ['pantallaAgregar', 'pantallaLista'];
    pantallas.forEach(p => document.getElementById(p).className = 'pantalla');
    
    document.getElementById(id).className = 'pantalla activa';

    const botones = document.getElementsByClassName('tab-button');
    for (let i = 0; i < botones.length; i++) {
        botones[i].className = 'tab-button';
    }
    botones[id === 'pantallaAgregar' ? 0 : 1].className = 'tab-button activo';

    if (id === 'pantallaLista') actualizarContador();
}

function agregarTarea() {
    const titulo = document.getElementById('titulo').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();

    if (!titulo) return alert('Por favor completa los campos de la tarea');

    numeroTarea++;

    const tareaHTML = `
        <div class="tarea" id="tarea${numeroTarea}">
            <h3>${titulo}</h3>
            ${descripcion ? `<p>${descripcion}</p>` : ''}
            <div class="estado pendiente" id="estado${numeroTarea}">Pendiente</div>
            <button class="boton-pequeno" onclick="cambiarEstado(${numeroTarea})">Completar</button>
            <button class="boton-eliminar" onclick="eliminarTarea(${numeroTarea})">Eliminar</button>
        </div>
    `;

    document.getElementById('listaTareas').insertAdjacentHTML('beforeend', tareaHTML);
    document.getElementById('sinTareas').style.display = 'none';
    document.getElementById('titulo').value = '';
    document.getElementById('descripcion').value = '';
    
}

function agregarYVerLista() {
    agregarTarea();
    mostrarPantalla('pantallaLista');
}

function cambiarEstado(n) {
    const tarea = document.getElementById(`tarea${n}`);
    const estado = document.getElementById(`estado${n}`);
    const boton = tarea.querySelector('.boton-pequeno');

    const completada = tarea.classList.toggle('completada');

    estado.textContent = completada ? 'Completada' : 'Pendiente';
    estado.className = completada ? 'estado completada-badge' : 'estado pendiente';
    boton.textContent = completada ? 'Reactivar' : 'Completar';
}

function eliminarTarea(n) {
    if (confirm('¿Estás seguro de eliminar esta tarea?')) {
        const tarea = document.getElementById(`tarea${n}`);
        tarea?.remove();
        actualizarContador();

        if (document.getElementsByClassName('tarea').length === 0) {
            document.getElementById('sinTareas').style.display = 'block';
        }

        alert('Tarea eliminada');
    }
}

function actualizarContador() {
    const total = document.getElementsByClassName('tarea').length;
    document.getElementById('contador').textContent = total;
}

function cargarEjemplos() {
    const ejemplos = [
        { titulo: 'Estudiar para el examen', descripcion: 'Revisar los apuntes de Progamación' },
        { titulo: 'Hacer los ejercicios', descripcion: 'Ejercicios del RA3' }
    ];
    ejemplos.forEach(ej => {
        document.getElementById('titulo').value = ej.titulo;
        document.getElementById('descripcion').value = ej.descripcion;
        agregarTarea();
    });
}

window.onload = cargarEjemplos;
