const usuario = {
    nombre: "Marlen",
    password: "admin123",
    capital: 0,
}

function ValidarUsuario (nombre , password) {
    const ingus= document.getElementById('ingus')
    if(nombre === usuario.nombre && password === usuario.contraseña) {
        alert('login exitoso');
        ingus.hidden = true
    } else if (nombre === "" || password === "") {
        alert ('los datos son incorrectos')
    } else {
        alert('los campos SON OBLIGATORIOS')
    }
}

document.getElementById('btn').addEventListener('click', function () {
    let nombre = document.getElementById('user').value
    let password = document.getElementById('pass').value 
    ValidarUsuario (nombre , password)
}) 


function crearCapital(objeto, capital) {
    objeto['capital'] = capital;

}

function addCapital(objeto, monto) {
    objeto.capital = objeto.capital + monto;

}

document.getElementById('btn2').addEventListener('click', function () {
    console.log ('Hola' + usuario.nombre + 'su monto de capital es:' + objeto.capital + 'pesos')
}) 

