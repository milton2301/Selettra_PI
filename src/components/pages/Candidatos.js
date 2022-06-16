import {useEffect, useState} from 'react'
import styles from './Pages.module.css';
import LinkButtom from '../layout/elements/LinkButton'
import Container from '../layout/Container'
import CandidatosCard from '../cadastro/CandidatosCard'
import Loading from '../layout/elements/Loading'
export default function Candidatos(){ 
    const [candidatos, setCandidatatos] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    useEffect(() => {
        setTimeout(()=>{
            fetch('http://localhost:5000/candidatos', {
                method: 'GET',
                headers: {
                        'Content-Type': 'application/json',
                    },
            })
            .then((resp) => resp.json())
            .then((data) => {
                setCandidatatos(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
        }, 300)
    },[])

    function removeCandidatos(id){
        fetch(`http://localhost:5000/candidatos/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((resp) => resp.json()).then((data) => {
            setCandidatatos(candidatos.filter((candidato) => candidato.id !== id))
        }).catch((err) => console.log(err))
    }

    return(
        <div className={styles.cadastro_container}>
        <div className={styles.container_title}> 
             <h1>Canditatos cadastrados</h1>
            <LinkButtom to="/cadastro" text="Novo cadastro"/>
         </div>
<Container customClass="start">
    {candidatos.length > 0 && candidatos.map((candidato) =>(
        <CandidatosCard handleRemove={removeCandidatos} key={candidato.id} id={candidato.id} name={candidato.name} sexo={candidato.sexo.name} idade={candidato.idade}
        vagaCandidatada={candidato.vagaCandidatada.name}/>
    ))}

{!removeLoading && <Loading/>}
{removeLoading && candidatos.length === 0 && (
    <p>Sem candidatos!</p>
)}
</Container>
</div>
    )
}