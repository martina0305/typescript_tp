///////// DEADLINE ///////// (Esta mal el nombre de la ficha)

interface Tarea {
    nombreTarea: string,
    estaPendiente: boolean,
    prioridad: "Alta" | "Media" | "Baja",
    deadline: Date
}

const valorPrioridad ={
    "Alta": 1,
    "Media": 2,
    "Baja": 3,
}

const tareasUsuario :Tarea [] = [
    {
        nombreTarea: "Tengo que entregar el tp1 de prog",
        estaPendiente: true,
        prioridad: "Alta",
        deadline: new Date('2024-04-28') 
    },
    {
        nombreTarea: "Darle de comer a Mushito",
        estaPendiente: true,
        prioridad: "Baja",
        deadline: new Date('2024-04-15')
    },
    {
        nombreTarea: "Lavar el mate",
        estaPendiente: true,
        prioridad: "Media",
        deadline: new Date('2024-04-13')
    },
    {
        nombreTarea: "Ir a comprar espirales",
        estaPendiente: false,
        prioridad: "Media",
        deadline: new Date('2024-04-19')
    },
    {
        nombreTarea: "Ir a comprar una birrita",
        estaPendiente: true,
        prioridad: "Media",
        deadline: new Date('2024-04-26')
    },
];


function buscarTareasPendientes (tareas : Tarea[]) : Tarea[] {

    return tareas.filter(tarea => tarea.estaPendiente);
}

const tareasPendientes = buscarTareasPendientes(tareasUsuario);

function ordenarTareas (tareasPendientes : Tarea[]) : Tarea[]{
    return tareasPendientes.sort((a, b) => valorPrioridad[a.prioridad] - valorPrioridad[b.prioridad]);
    
}

//No las compara
const tareasPendientesOrdenadas = ordenarTareas(tareasPendientes);

function ordenarPorFecha(tareas: Tarea[]): Tarea[] {
    return tareas.sort((a, b) => a.deadline.getTime() - b.deadline.getTime());
}

const tareasOrdenadasPorFecha = ordenarPorFecha(tareasPendientesOrdenadas);


tareasOrdenadasPorFecha.forEach(tarea => {
    console.log(`${tarea.nombreTarea} - Priority: ${tarea.prioridad}, Deadline: ${tarea.deadline.toDateString()}`);
});
