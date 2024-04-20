/////// Validando personas //////
// Los inversores rompieron la base de datos metiendo cualquier texto en el campo de nombre de persona. Necesitamos una función que valide si un texto es un nombre de persona válido o no. Por ahora solo aceptemos que se escriba el nombre o el nombre y apellido.

//Lo que me hace ruido de este enunciado es que pide validar si un TEXTO ES UN NOMBRE DE PERSONA VÁLIDO O NO. Podría ser con un regex diciendole que caracteres especiales no aplican, pero si yo pongo "alskdj" sigue siendo un texto y va a pasar como si nada.

interface Usuario{
    nombre: string,
    apellido ?: string,
}

const personas : Usuario[] = [
    {
        nombre: "Juan"
    },
    
    {
        nombre: "Tomas!!=",
        apellido: "Lemos",
    }
]

function esNombreValido(nombre: string): boolean  {
    return /^[A-Za-z\s'-]+$/.test(nombre);
}

function validarNombres(personas: Usuario[]): void {
    personas.forEach(persona => {
        console.log(`Nombre: ${persona.nombre} - Válido: ${esNombreValido(persona.nombre)}`);
        if (persona.apellido) {
            console.log(`Apellido: ${persona.apellido} - Válido: ${esNombreValido(persona.apellido)}`);
        }
    });
}

validarNombres(personas);
