const nombre = document.querySelector('#nombre')
const telefono = document.querySelector('#telefono')
const correo = document.querySelector('#correo')
const btn = document.querySelector('#btn')
const btnMostrar = document.querySelector('#btnMostrar')
const divDatos = document.querySelector('#datos')


btn.addEventListener('click', enviarForm)

function enviarForm() {
    localStorage.setItem('nombre', nombre.value)
    localStorage.setItem('telefono', telefono.value)
    localStorage.setItem('correo', correo.value)
}

btnMostrar.addEventListener('click', ()=>{
    const nombreValue = localStorage.getItem('nombre')
    const telefonoValue = localStorage.getItem('telefono')
    const correoValue = localStorage.getItem('correo')

    divDatos.innerHTML = `
        <p>Nombre: ${nombreValue}</p>
        <p>Teléfono: ${telefonoValue}</p>
        <p>Correo: ${correoValue}</p>
    `
})