let persona = {
    nombre: 'Eliza',
    edad: '26',
    hijos: []
}

function addhijos(objeto, hijo) {
    persona.hijos.push(hijo)

}

function crearCapital(objeto, capital) {
    objeto[' capital'] = capital;

}

function addCapital(objeto, monto) {
    objeto.capital = objeto.capital + monto;

}
function retiroCapital(objeto, monto) {
    objeto.capital = objeto.capital - monto;

}

function cambiarNombre(objeto, nuevoNombre) {
    objeto.nombre = nuevoNombre;
}
addhijos(persona,'Jose');
addhijos(persona, 'Mati');
addhijos(persona, 'Laura');
crearCapital(persona, 100000);
addCapital(persona, 10000);
addCapital(persona, 5000);
addCapital(persona, 100000);
retiroCapital(persona, 150000);
cambiarNombre(persona, "Javier Hernandez")
console.log(persona);
