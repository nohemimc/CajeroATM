window.addEventListener("DOMContentLoaded", function () {
    escuhaEvento();
});
// Escucha del evento al seleccionar una opción del menú y carga del HTML
const escuhaEvento = () => {
    // Menu de opciones
    const consultar = document.querySelector('#consultar');
    const depositar = document.querySelector('#depositar');
    const retirar = document.querySelector('#retirar');
    const salir = document.querySelector('#salir');
    const nombreUsuario = document.querySelector('#nombreUsuario');
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    nombreUsuario.innerHTML = usuario.usuario;


    consultar?.addEventListener('click', function(e){
        e.preventDefault();
        window.location.href = './consulta.html'
    });
    depositar?.addEventListener('click', function(e){
        e.preventDefault();
        window.location.href = './deposito.html'
    });
    retirar?.addEventListener('click', function(e){
        e.preventDefault();
        window.location.href = './retiro.html'
    });
    salir?.addEventListener('click', function(e){
        window.location.href = './index.html'
    })

}
