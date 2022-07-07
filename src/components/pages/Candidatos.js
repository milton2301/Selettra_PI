import {useEffect, useState} from 'react'
import styles from './Pages.module.css';
import CandidatosCard from '../cadastro/CandidatosCard'
import Loading from '../layout/elements/Loading'
export default function Candidatos(){ 
    const [candidatos, setCandidatatos] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    useEffect(() => {
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

    function procurarCandidatos(){
        var procura = document.getElementById("procurar").value 
    
        fetch(`http://localhost:5000/candidatos?name=${procura}`, {
            method: 'GET',
            headers: {
                    'Content-Type': 'application/json',
                },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCandidatatos(data)
        })
        .catch((err) => console.log(err))
    }


    
    return(
        <div className={styles.cadastro_container}>
        <div className={styles.container_title}> 
             <h1>Canditatos cadastrados</h1>
        </div>
<div className="row">
    <div className="col-md-12">
    <div className="col-md-6 offset-md-3">
                <div className="input-group">
                 <input type="search" className="form-control rounded" placeholder="Buscar candidato por nome" aria-label="Search" name="procurar" id="procurar" aria-describedby="search-addon" />
                <button type="button" onClick={procurarCandidatos} className="btn btn-outline-primary"><i className="fa fa-search"></i> Buscar</button>
                </div>
          </div>

    </div>
    <div className="col-md-12"><br/></div>
    {candidatos.length > 0 && candidatos.map((candidato) =>(
        <CandidatosCard handleRemove={removeCandidatos} key={candidato.id} id={candidato.id} name={candidato.name} sexo={candidato.sexo.name} idade={candidato.idade}
        vagaCandidatada={candidato.vagaCandidatada.name}/>
        ))}
</div>

{!removeLoading && <Loading/>}
{removeLoading && candidatos.length === 0 && (
    <p>Sem candidatos!</p>
)}
</div>
    )
}