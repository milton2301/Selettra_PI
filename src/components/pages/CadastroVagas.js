import {useState} from 'react'
import CadastroFormVagas from '../cadastro/CadastroFormVagas';
import VagasCadastradas from '../cadastro/VagasCadastradas'
import styles from './Pages.module.css';

function UseForceUpdate(){
  const [value, setValue] = useState(0); // Integer state
  return () => setValue(value >= value + 1); // update the state To force render
  }
 

export default function CadastroVagas({props}) {
  const forceUpdate = UseForceUpdate();

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
          <CadastroFormVagas handledSubmit={create} btntext="Cadastrar"/>
          <VagasCadastradas/>
        </div> 
      )
}