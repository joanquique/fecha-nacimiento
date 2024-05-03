function calcularEdad(fechaNacimiento) {
    var fechaNacimientoDate = new Date(fechaNacimiento);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
    var mesActual = hoy.getMonth() + 1;
    var mesNacimiento = fechaNacimientoDate.getMonth() + 1;
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < fechaNacimientoDate.getDate())) {
        edad--;
    }
    return edad;
}
console.log(calcularEdad('2000-05-22'));
