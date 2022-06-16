import {useState, useEffect} from 'react'
import CadastroFormVagas from '../cadastro/CadastroFormVagas';
import VagasCard from '../cadastro/VagasCard'
import styles from './Pages.module.css';
import Container from '../layout/Container'

function UseForceUpdate(){
  const [value, setValue] = useState(0); // Integer state
  return () => setValue(value >= value + 1); // update the state To force render
}
 

export default function CadastroVagas({props}) {
  const forceUpdate = UseForceUpdate();

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

  function removeVaga(id){
    fetch(`http://localhost:5000/vagas/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((resp) => resp.json()).then((data) => {
        setVagas(vagas.filter((vaga) => vaga.id !== id))
    }).catch((err) => console.log(err))
}

  function create(vagas){

    fetch('http://localhost:5000/vagas', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(vagas),
    }).then((response) => response.json())
    .then((data) =>{
      console.log(data);
      forceUpdate()
    })
    .catch(err => console.error(err));
  }

    return(
        <div className={styles.cadastro_container}>
        <div className="row">
          <div className="col-md-12 text-center">
          <h1>Cadastro de Vagas</h1>
          </div>
        </div>
        <Container customClass="start">
          <CadastroFormVagas handledSubmit={create} btntext="Cadastrar"/>
            
          {vagas.length > 0 && vagas.map((vaga) =>(
        <VagasCard handleRemove={removeVaga} key={vaga.id} id={vaga.id} name={vaga.name} setor={vaga.setor} salario={vaga.salario} descricao={vaga.descricao} quantidade={vaga.qtd}/>
    ))}
    </Container>
        </div> 
      )
}