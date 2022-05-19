window.addEventListener('load', () =>{
    retirarEfect();
})

const retirarEfect = () => {
    //Retirar
    const saldoAnterior = document.querySelector('#saldoAnterior');
    const saldoRetiro = document.querySelector('#saldoRetiro');
    const saldoActual = document.querySelector('#saldoActual');
    const nombreUsuario = document.querySelector('#nombreUsuario');
    const retirarEfectivo = document.querySelector('#retirarEfectivo');
    const retirar = document.querySelector('#retirar');
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    saldoAnterior.value = usuario.saldo;
    nombreUsuario.innerHTML = usuario.usuario;
    retirar.addEventListener('click', function(e){
        e.preventDefault();
        //Validación del monto a depositar
        console.log(saldoRetiro.value);
        if (saldoRetiro.value == "" || /\D/.test(saldoRetiro.value)){
            mostrarAlerta('Ingrese un carácter válido, por favor.', true);
            saldoRetiro.value = "";
            return;
        };
        //Validación del máximo a depositar
        if ((parseInt(usuario.saldo) - parseInt(saldoRetiro.value)) < 10){
            mostrarAlerta('El saldo minimo es de $10.00', true);
            return;
        }
        saldoActual.value = parseInt(usuario.saldo) - parseInt(saldoRetiro.value);
        borrarHtml();
        mostrarAlerta('Operación exitosa');
    })

}
//Alerta
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    retirarEfectivo.appendChild(alerta);

    //Desaparecer alerta
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}
//Limpiar HTML
function borrarHtml(){
    saldoRetiro.value = '';
}