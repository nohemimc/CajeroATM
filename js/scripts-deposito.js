window.addEventListener('load', () =>{
    depositarEfect();
})

const depositarEfect = () => {
    //Deposito
    const saldoAnterior = document.querySelector('#saldoAnterior');
    const saldoDeposito = document.querySelector('#saldoDeposito');
    const saldoActual = document.querySelector('#saldoActual');
    const nombreUsuario = document.querySelector('#nombreUsuario');
    const depositarEfectivo = document.querySelector('#depositarEfectivo');
    const depositar = document.querySelector('#depositar');
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    saldoAnterior.value = usuario.saldo;
    nombreUsuario.innerHTML = usuario.usuario;
    depositar.addEventListener('click', function(e){
        e.preventDefault();
        //Validación del monto a depositar
        if (saldoDeposito.value == "" || /\D/.test(saldoDeposito.value)){
            mostrarAlerta('Ingrese un carácter válido, por favor.', true);
            saldoDeposito.value = "";
            return;
        };
        //Validación del máximo a depositar
        if ((parseInt(usuario.saldo) + parseInt(saldoDeposito.value)) > 990){
            mostrarAlerta('El saldo máximo son $990.00', true);
            return;
        }
        saldoActual.value = parseInt(usuario.saldo) + parseInt(saldoDeposito.value);
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
    depositarEfectivo.appendChild(alerta);

    //Desaparecer alerta
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}
//Limpiar HTML
function borrarHtml(){
    saldoDeposito.value = '';
}