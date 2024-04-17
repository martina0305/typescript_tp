////////////////////// ASIGNACIONES ///////////////////
interface Tarea  {
    nombreTarea: string,
    estaPendiente : boolean,
    prioridad: "Alta" | "Media" | "Baja",
}

interface Usuario  {
        nombre: string,
        tarea: Tarea[]
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
