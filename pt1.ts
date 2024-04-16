
/////////////// MOSTRAR TAREAS /////////////

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


function buscarTareasPendientes (tareas : Tarea[]) : Tarea[] {
   /*for(var i = 0; i < tareas.length; i++){

        if(tareas[i].estaPendiente === true){
             return tareas[i].nombreTarea +" - "+"PENDIENTE";
        }
    }*/

    return tareas.filter(tarea => tarea.estaPendiente);
}

const tareasPendientes = buscarTareasPendientes(tareasUsuario);

function ordenarTareas (tareasPendientes : Tarea[]) : Tarea[]{
    return tareasPendientes.sort((a, b) => valorPrioridad[a.prioridad] - valorPrioridad[b.prioridad]);
    
}

//mostrar 2 formas distintas
const tareasPendientesOrdenadas = ordenarTareas(tareasPendientes);

console.log(ordenarTareas(tareasPendientes));

tareasPendientesOrdenadas.forEach (tarea => {
    console.log(`${tarea.nombreTarea} - PENDIENTE - Prioridad: ${tarea.prioridad}`);
});