import '@styles/Activities.scss';
import Card from '../components/Card';
import { useEffect, useState } from 'react';

const Activities = () => {

    const [activities, setActivities] = useState([]);

    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    const BASE_URL = "http://localhost:4000/activities";

    const fetchActivities = async () => {
        try{
            const response = await fetch(BASE_URL);
            const data = await response.json();
            setActivities(data);
        }catch(error){
            console.error(`Errror al retornar actividades ${error}`)
        }   
    }

    useEffect(() => {
        fetchActivities();
    }, []);

    const handleInscribir = (nombreActividad) => {
        alert(`Inscripto en ${nombreActividad}`)
    }

    return (
        <div className="activities-container">
            {activities.map((actividad) => (
                <Card key={actividad.nombre} title={actividad.nombre} subtitle={actividad.descripcion}> 
                    <ul>
                        {actividad.horarios.map((horario, i) => (
                            <li key={i}>
                                { diasSemana[horario.dia] }: {horario["hora-inicio"] } - { horario["hora-fin"]}
                            </li>
                        ))}
                    </ul>
                    { isLoggedIn && (
                        <button onClick={() => handleInscribir(actividad.nombre)}>
                            Inscribirse
                        </button>
                    ) }
                    
                </Card>
            ))}
        </div>
    )

}

export default Activities;