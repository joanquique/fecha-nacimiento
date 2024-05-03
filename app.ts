function calcularEdad(fechaNacimiento: string): number {
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
    const mesActual = hoy.getMonth() + 1;
    const mesNacimiento = fechaNacimientoDate.getMonth() + 1;

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < fechaNacimientoDate.getDate())) {
        edad--;
    }

    return edad;
}

console.log(calcularEdad('2000-05-22')); 
