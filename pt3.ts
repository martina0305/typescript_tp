////////////////////// ASIGNACIONES ///////////////////
interface Tarea  {
    nombreTarea: string,
    estaPendiente : boolean,
    prioridad: "Alta" | "Media" | "Baja",
}

const valorPrioridad ={
    "Alta": 1,
    "Media": 2,
    "Baja": 3,
}
interface Usuario  {
        nombre: string,
        tarea: Tarea[]
}

const tareasUsuario : Tarea[] = [
    {
        nombreTarea: "Tengo que entregar el tp1 de prog",
        estaPendiente: true,
        prioridad: "Alta"
    },
    {
        nombreTarea: "Darle de comer a Mushito",
        estaPendiente: true,
        prioridad: "Baja"
    },
    {
        nombreTarea: "Lavar el mate",
        estaPendiente: true,
        prioridad: "Media"
    },
    {
        nombreTarea: "Ir a comprar espirales",
        estaPendiente: false,
        prioridad: "Media"
    },
    {
        nombreTarea: "Ir a comprar una birrita",
        estaPendiente: true,
        prioridad: "Media"
    },
]

const personas : Usuario[] =[
    {
        nombre: "Juan",
        tarea: tareasUsuario,
    },

    {
        nombre: "Cyrene",
        tarea: tareasUsuario,
    },
    {
        nombre: "Tomas",
        tarea: tareasUsuario,
    },
    {
        nombre: "Vicky",
        tarea: tareasUsuario,
    },
    {
        nombre: "Alan",
        tarea: tareasUsuario,
    },
]

/*function mostrarTareasUsuarios (personas : Usuario[])  {
    personas.map(persona => {
        const tareasInfo = persona.tarea.map(tarea => `${tarea.nombreTarea}`);
        console.log(`Tareas de ${persona.nombre} ${tareasInfo}`);
    });
}

function 
console.log(mostrarTareasUsuarios(personas))*/

/*function buscarPersona(personas:Usuario[]){
    const nombreUsuario = "Tomas" 
    const usuario = personas.find(persona => persona.nombre === nombreUsuario); 

    console.log(usuario);
}*/

//console.log(buscarPersona(personas));

/*function buscarTareasPendientes (tareas : Tarea[]) : Tarea[] {
    /*for(var i = 0; i < tareas.length; i++){
 
         if(tareas[i].estaPendiente === true){
              return tareas[i].nombreTarea +" - "+"PENDIENTE";
         }
     }
 
     return tareas.filter(tarea => tarea.estaPendiente);
 }
 
 const tareasPendientes = buscarTareasPendientes(tareasUsuario);
 
 function ordenarTareas (tareasPendientes : Tarea[]) : Tarea[]{
     return tareasPendientes.sort((a, b) => valorPrioridad[a.prioridad] - valorPrioridad[b.prioridad]);
     
 }
 
 //mostrar 2 formas distintas
 const tareasPendientesOrdenadas = ordenarTareas(tareasPendientes);
 
 /*console.log(ordenarTareas(tareasPendientes));*/
 
 /*tareasPendientesOrdenadas.forEach (tarea => {
     console.log(`${tarea.nombreTarea} - PENDIENTE - Prioridad: ${tarea.prioridad}`);
 });*/


 function mostrarTareasDePersonaConMap(nombre: string, personas: Usuario[]) {
    const persona = personas.find(persona => persona.nombre === nombre);

    if (persona) {
        console.log(`Tareas de ${persona.nombre}:`);
        const tareasInfo = persona.tarea.map(tarea => `Tarea: ${tarea.nombreTarea}`);
        console.log(tareasInfo);
    } else {
        console.log('Persona no encontrada.');
    }
}

// Ejemplo de uso:
mostrarTareasDePersonaConMap("Alan", personas);

//// ¡¡¡¡armar la estructura del map!!!! //// REHACER


