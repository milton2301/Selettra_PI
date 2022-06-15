import CadastroForm from '../cadastro/CadastroForm';
import styles from './Pages.module.css';

export default function Cadastro({props}) {

  function create(candidato){

    fetch('http://localhost:5000/candidatos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(candidato),
    }).then((response) => response.json())
    .then((data) =>{
      console.log(data);
      //Redirect
    })
    .catch(err => console.error(err));
  }

    return(
        <div className={styles.cadastro_container}>
          <h1>Novo cadastro</h1>
          <CadastroForm handledSubmit={create} btntext="Cadastrar"/>
        </div> 
      )
}