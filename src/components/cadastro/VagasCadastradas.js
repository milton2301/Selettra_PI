import {useEffect, useState} from 'react'
export default function VagasCadastradas(){ 
    const [vagas, setVagas] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/vagas', {
            method: 'GET',
            headers: {
                    'Content-Type': 'application/json',
                },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setVagas(data)
        })
        .catch((err) => console.log(err))
    },[])

    return(
        <div className="row">
            <h1>Vagas cadastradas</h1>
            <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Setor</th>
                <th scope="col">Salário</th>
                <th scope="col">Descrição</th>
                <th scope="col">Quantidade</th>
                </tr>
            </thead>
            <tbody>
                {vagas && vagas.map((vaga) =>(
                <tr key={vaga.id}>          
                <th scope="row">{vaga.id}</th>
                <td>{vaga.name}</td>
                <td>{vaga.setor}</td>
                <td>{vaga.salario}</td>
                <td>{vaga.descricao}</td>
                <td>{vaga.qtd}</td>
                </tr>
                    ))}
                </tbody>
            </table>

            </div>
    )
}