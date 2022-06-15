import {useEffect, useState} from 'react'
import styles from './Pages.module.css';

export default function Candidatos(){ 
    const [candidatos, setCandidatatos] = useState([])
    
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
        })
        .catch((err) => console.log(err))
    },[])

    return(
        <div className={styles.cadastro_container}>
         
         <h1>Canditatos cadastrados</h1>

            <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Idade</th>
                <th scope="col">Sexo</th>
                <th scope="col">E-mail</th>
                <th scope="col">Telefone</th>
                <th scope="col">Vaga candidatada</th>
                </tr>
            </thead>
            <tbody>
                {candidatos && candidatos.map((candidato) =>(
                <tr key={candidato.id}>          
                <th scope="row">{candidato.id}</th>
                <td>{candidato.name}</td>
                <td>{candidato.idade}</td>
                <td>{candidato.sexo.name}</td>
                <td>{candidato.email}</td>
                <td>{candidato.telefone}</td>
                <td>{candidato.vagaCandidatada.name}</td>
                </tr>
                    ))}
                </tbody>
            </table>

            </div>
    )
}