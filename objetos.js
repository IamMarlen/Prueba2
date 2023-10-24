let sujeto= {
    nombre: 'David',
    apellido: 'Zuleta',
    titulo: 'ing mecanico',
    edad: 30,
    estado: 'feliz',
    capital: 10000, 

}

let nombre = "nombre";
sujeto ['esposa'] = 'Diana'
sujeto ['estado'] = 'Infeliz'
sujeto['capital'] = 0;
sujeto.apellido = 'Molina'

console.log ('se casa',  sujeto)

sujeto.esposa = undefined;
sujeto.capital = 15000;
sujeto.estado = 'Feliz'

console.log ('se divorcia', sujeto)

//Hola David Zuleta, su edad es 30
console.log('Hola' + sujeto.nombre + ' ' + sujeto.apellido +  ' ' + sujeto.edad);
//console.log ( 'Hola' ${sujeto.nombre} ${sujeto.apellido}, 'su edad es' ${sujeto.edad})
 
function cambiarNombre(sujeto, nuevoNombre) {
    sujeto.nombre = nuevoNombre;
    console.log(sujeto);
}

function agregarSegundoNombre(sujeto, segundoNombre) {
    sujeto.nombre = sujeto.nombre
}

cambiarNombre(sujeto, 'Pedro')
