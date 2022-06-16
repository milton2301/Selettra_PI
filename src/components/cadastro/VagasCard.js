import {Link} from 'react-router-dom'

import styles from './CandidatosCard.module.css'

import {BsEye, BsFillTrashFill} from 'react-icons/bs'

export default function VagasCard({id, name, setor, salario, descricao, quantidade, handleRemove}){
    
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return(
    <div className={styles.candidato_card}>
        <h4>{name}</h4>
        <p><span>Setor:</span> {setor}</p>
        <p><span>Salário:</span> R$ {salario},00</p>
        <p><span>Descrição:</span> {descricao}</p>
        <p><span>Quantidade:</span> {quantidade}</p>
        <div className={styles.candidato_card_actions}>
            <Link to={`/vaga/${id}`}>
                <BsEye/> Ver
            </Link>
            <button onClick={remove}>
                <BsFillTrashFill/> Excluir
            </button>
        </div>
    </div>
    )
}