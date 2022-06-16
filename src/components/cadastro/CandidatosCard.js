import {Link} from 'react-router-dom'

import styles from './CandidatosCard.module.css'

import {BsEye, BsFillTrashFill} from 'react-icons/bs'

export default function CandidatosCard({id, name, sexo, idade, cpf, rg, estadoCivil, email, telefone, whatsapp,vagaCandidatada, handleRemove}){
    
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return(
    <div className={styles.candidato_card}>
            <h4>{name}</h4>
            <p><span>Sexo:</span> {sexo}</p>
            <p><span>Idade:</span> {idade}</p>
            <p><span>Vaga candidatada: </span> {vagaCandidatada}</p>
        <div className={styles.candidato_card_actions}>
            <Link to={`/candidato/${id}`}>
                <BsEye/> Ver
            </Link>
            <button onClick={remove}>
                <BsFillTrashFill/> Excluir
            </button>
        </div>
    </div>
    )
}