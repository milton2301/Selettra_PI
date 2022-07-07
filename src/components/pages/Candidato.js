import styles from './Pages.module.css';
import Loading from '../layout/elements/Loading'
import Container from '../layout/Container'

import {useParams} from 'react-router-dom'
import { useState, useEffect} from 'react'
import CadastroForm from '../cadastro/CadastroForm';

export default function Candidato(){
   const { id} = useParams()

   const [candidato, setCandidatato] = useState([])
    const [showCandidato, setShowCandidato] = useState(false)
   useEffect(() => {
    setTimeout(() => {
        fetch(`http://localhost:5000/candidatos/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json()).then((response) =>{
            setCandidatato(response)
        }).catch((error) => console.log(error))
    }, 50)
   }, [id])

   function toggleCandidatatoForm(){
        setShowCandidato(!showCandidato)
   }

   function editPost(candidato){
    fetch(`http://localhost:5000/candidatos/${candidato.id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(candidato),
    }).then((response) => response.json()).then((response) =>{
        setCandidatato(response)
        showCandidato(!showCandidato)
        alert("Alteração concluida com sucesso!")
    }).catch((error) => console.log(error))
   }

    return (
        <div>
        {candidato.name ? (
            <div className={styles.candidato_container}>
                <Container customClass="column">
                    <div className={styles.container_title}>
                        <h1>Nome: {candidato.name}</h1>
                        <button className={styles.btns} onClick={toggleCandidatatoForm}>{!showCandidato ? 'Editar' : 'Fechar'}</button>
                    </div>
                        {!showCandidato ? (
                            <div className={styles.candidato_card}>
                            <h4>{candidato.name}</h4>
                            <p><span>Sexo:</span> {candidato.sexo.name}</p>
                            <p><span>Idade:</span> {candidato.idade}</p>
                            <p><span>CPF:</span> {candidato.cpf}</p>
                            <p><span>RG:</span> {candidato.rg}</p>
                            <p><span>Estado civil:</span> {candidato.estadoCivil.name}</p>
                            <p><span>E-mail:</span> {candidato.email}</p>
                            <p><span>Telefone: </span> {candidato.telefone}</p>
                            <p><span>WhatsApp: </span> {candidato.whatsapp}</p>
                            <p><span>Vaga: </span> {candidato.vagaCandidatada.name}</p>
                        </div>
                     
                        ) : (
                            <div>
                                <CadastroForm handledSubmit={editPost} btntext="Salvar edições" candidatosData={candidato}/>
                            </div>
                        )}
                          
                </Container>
            </div>
        ) : (
            <Loading />
        )}
        </div>
    )
}