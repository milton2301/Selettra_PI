import styles from './Pages.module.css';
import Loading from '../layout/elements/Loading'
import Container from '../layout/Container'

import {useParams} from 'react-router-dom'
import { useState, useEffect} from 'react'
import CadastroFormVagas from '../cadastro/CadastroFormVagas';

export default function Vaga(){
    const { id} = useParams()

    const [vaga, setVaga] = useState([])
    const [showVaga, setShowVaga] = useState(false)
    const [candidato, setCandidatato] = useState([])

    useEffect(() => {
    setTimeout(() => {
        fetch(`http://localhost:5000/vagas/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json()).then((response) =>{
            setVaga(response)
        }).catch((error) => console.log(error))
    }, 500)
    }, [id])

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/candidatos`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => response.json()).then((response) =>{
                setCandidatato(response)
            }).catch((error) => console.log(error))
        }, 500)
        }, [])

    function toggleCandidatatoForm(){
        setShowVaga(!showVaga)
    }

    function editPost(vaga){
        fetch(`http://localhost:5000/vagas/${vaga.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vaga),
        }).then((response) => response.json()).then((response) =>{
            setVaga(response)
            showVaga(!showVaga)
            alert("Alteração concluida com sucesso!")
        }).catch((error) => console.log(error))
    }

    return (
        <div>
        {vaga.name ? (
            <div className={styles.candidato_container}>
                <Container customClass="column">
                    <div className={styles.container_title}>
                        <h1>Vaga para: {vaga.name}</h1>
                        <button className={styles.btns} onClick={toggleCandidatatoForm}>{!showVaga ? 'Editar' : 'Fechar'}</button>
                        </div>
                        {!showVaga ? (
                            <div className={styles.candidato_card}>
                            <h4>{vaga.name}</h4>
                            <p><span>Setor: </span> {vaga.setor}</p>
                            <p><span>Salário: </span> R$ {vaga.salario},00</p>
                            <p><span>Quantidade: </span> {vaga.qtd}</p>
                            <p><span>Descrição: </span> {vaga.descricao}</p>
                            {vaga.teste ? (
                                <p><span>Teste: </span> {vaga.teste.name}</p>
                            ) : (
                            <p><span>Sem testes para esta vaga</span></p>
                            )}
                        </div>
                     
                        ) : (
                            <div>
                                <CadastroFormVagas handledSubmit={editPost} btntext="Salvar edição" vagasData={vaga}/>
                            </div>
                        )}

                        <br/>
                        <h1>Candidatos a vaga</h1>
                        <table className="table table-sm">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Sexo</th>
                            <th scope="col">Idade</th>
                            <th scope="col">Enviar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {candidato.length > 0 && candidato.map((can)=>(
                                <tr key={can.id}>
                                    <th scope="row">{can.id}</th>
                                    <td>{can.name}</td>
                                    <td>{can.sexo.name}</td>
                                    <td>{can.idade}</td>
                                    <td><button type="button"><i className="fa fa-envelope"></i></button></td>
                                </tr>
                            ))}
                        </tbody>
                        </table>
        
                </Container>
            </div>
        ) : (
            <Loading />
        )}
        </div>
    )
}