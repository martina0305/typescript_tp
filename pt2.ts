/////////////// CONSULTA A LA API /////////////

//junto todas la funciones del punto uno en una y hago el async await?

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

/*console.log(ordenarTareas(tareasPendientes));*/

//función asincrónica

async function delay(): Promise <Tarea[]> {
   console.log("tus tareas estan volando");
    await new Promise(resolve => setTimeout(() => {
         tareasPendientesOrdenadas.forEach (tarea => {console.log(`${tarea.nombreTarea} - PENDIENTE - Prioridad: ${tarea.prioridad}`);});
         resolve
        }, 3000)); // Simula un retraso de 3 segundos
    return tareasPendientesOrdenadas;
}

delay();