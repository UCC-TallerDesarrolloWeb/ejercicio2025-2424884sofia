import './styles/Activities.scss';

const Activities = () => {

    const activities = [
        {
            nombre: "Taekwondo",
            descripcion: "Arte marcial coreana",
            horarios: [
            { dia: 2, "hora-inicio": "18:30", "hora-fin": "20:00" },
            { dia: 4, "hora-inicio": "18:30", "hora-fin": "20:00" }
            ]
        },
        {
            nombre: "Zumba",
            descripcion: "Ritmos latinos",
            horarios: [
            { dia: 1, "Hora-inicio": "19:30", "hora-fin": "20:30" },
            { dia: 3, "Hora-inicio": "19:30", "hora-fin": "20:30" }
            ]
        },
        {
            nombre: "Yoga",
            descripcion: "Ritmos latinos",
            horarios: [
            { dia: 1, "Hora-inicio": "19:30", "hora-fin": "20:30" },
            { dia: 3, "Hora-inicio": "19:30", "hora-fin": "20:30" }
            ]
        },
        {
            nombre: "Funcional",
            descripcion: "Ritmos latinos",
            horarios: [
            { dia: 1, "Hora-inicio": "19:30", "hora-fin": "20:30" },
            { dia: 3, "Hora-inicio": "19:30", "hora-fin": "20:30" }
            ]
        }
        ];

    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    const handleInscribir = (nombreActividad) => {
        alert(`Inscripto en ${nombreActividad}`)
    }

    return (
        <div className="activities-container">
            {activities.map((actividad, index) => (
                <div className="activity-card" key={index}>
                    <h3>{actividad.nombre}</h3>
                    <p>{actividad.descripcion}</p>
                    <ul>
                        {actividad.horarios.map((horario, i) => (
                            <li key={i}>
                                { diasSemana[horario.dia] }: {horario["hora-inicio"] } - { horario["hora-fin"]}
                            </li>
                        ))}
                    </ul>
                    { isLoggedIn && (
                        <button onClick={() => handleInscribir(actividad.nombre)}>Inscribirse</button>
                    ) }
                    
                </div>
            ))}
        </div>
    )

}

export default Activities;