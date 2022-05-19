window.addEventListener('load', () =>{
    consultarEfect();
})

const consultarEfect = () => {
    const saldoActual = document.querySelector('#saldoActual');
    const nombreUsuario = document.querySelector('#nombreUsuario');
    const consultarEfectivo = document.querySelector('#consultarEfectivo');
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    saldoActual.value = usuario.saldo;
    nombreUsuario.innerHTML = usuario.usuario;
}