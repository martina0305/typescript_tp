///////// agregar descripcion //////////

interface Tarea  {
    nombreTarea: string,
    estaPendiente : boolean,
    prioridad: "Alta" | "Media" | "Baja",
    infoDescriptiva?: string;
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
        prioridad: "Alta",
        infoDescriptiva: "Completar todos los puntos"
    },
    {
        nombreTarea: "Darle de comer a Mushito",
        estaPendiente: true,
        prioridad: "Baja"
    },
    {
        nombreTarea: "Lavar el mate",
        estaPendiente: true,
        prioridad: "Media",
        infoDescriptiva: "Secar el mate con repasador"
    },
    {
        nombreTarea: "Ir a comprar espirales",
        estaPendiente: false,
        prioridad: "Media"
    },
    {
        nombreTarea: "Ir a comprar una birrita",
        estaPendiente: true,
        prioridad: "Media",
        infoDescriptiva: "Agregar un paquete de fideos marolio"
    },
]


function buscarTareasPendientes (tareas : Tarea[]) : Tarea[] {
    return tareas.filter(tarea => tarea.estaPendiente);
}

const tareasPendientes = buscarTareasPendientes(tareasUsuario);

function ordenarTareas (tareasPendientes : Tarea[]) : Tarea[]{
    return tareasPendientes.sort((a, b) => valorPrioridad[a.prioridad] - valorPrioridad[b.prioridad]);
    
}

const tareasPendientesOrdenadas = ordenarTareas(tareasPendientes);

console.log(ordenarTareas(tareasPendientes));



tareasPendientesOrdenadas.forEach (tarea => {
    let infoConsola = `${tarea.nombreTarea} - PENDIENTE - Prioridad: ${tarea.prioridad}`;
        if (tarea.infoDescriptiva) {
            infoConsola += ` - Info: ${tarea.infoDescriptiva}`;
        }
    console.log(infoConsola);
});




