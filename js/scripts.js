let listaUsuarios = [

]
const usuarioLogin = {
    usuario: '',
    password: ''
}

const usuario = document.querySelector('#usuario');
const password = document.querySelector('#password');
const crearUsuario = document.querySelector('#crearUsuario');
const login = document.querySelector('#login')

usuario.addEventListener('input', leerTexto);
password.addEventListener('input', leerTexto);

function leerTexto(e) {   
    usuarioLogin[e.target.id] = e.target.value; // Teclado --> Inputs --> Objeto
}

//Local storage
function setCuentas (){
    if(localStorage.getItem('usuarios')) {
        listaUsuarios = JSON.parse(localStorage.getItem('usuarios'));
    }
    const objetoUsuarios = {
        usuario: usuario.value,
        password: password.value
    }  
    listaUsuarios.push(objetoUsuarios);
    localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));
}

//Evento de Submit para crear cuentas
crearUsuario?.addEventListener('submit', function (e) {
    e.preventDefault();
    //Validación de los campos del formulario
    const { usuario, password } = usuarioLogin;
        if ( usuario === '' || password === '') {
            mostrarAlerta('Todos los campos están vacíos', true);
            return;
        }
    mostrarAlerta('Cuenta creada');
    setCuentas();
    borrarHtml();
});


//Evento de Submit para logearse
login?.addEventListener('submit', function(e){
    e.preventDefault();
    let usuarioBandera = false;
    listaUsuarios = JSON.parse(localStorage.getItem('usuarios'));
    //Validación de los campos del formulario
    if ( usuario.value === '' || password.value === '') {
        mostrarAlertaInicio('Todos los campos están vacíos', true);
        return;
    } 
    listaUsuarios.forEach(element => {
        if (element.usuario == usuario.value && element.password == password.value){
            localStorage.setItem('usuario', JSON.stringify({
                saldo: parseInt(Math.random() * (990 - 10) + 10),
                usuario: element.usuario
            }));
            window.location.href = './menu.html'
            usuarioBandera = true;
            return;
        }
        
    });
    if (!usuarioBandera){
        mostrarAlertaInicio('Usuario y/o contraseña incorrectos', true);
        usuario.value = "";
        password.value = "";
    } 
} );


//Alerta crear cuenta
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    crearUsuario.appendChild(alerta);

    //Desaparecer alerta
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

//Alerta iniciar sesion
function mostrarAlertaInicio(mensaje, error = null) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    login.appendChild(alerta);
    
    //Desaparecer alerta
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

function borrarHtml(){
    usuario.value = '';
    password.value = ''
}
