import {useState, useEffect} from 'react'
import CadastroFormVagas from '../cadastro/CadastroFormVagas';
import VagasCard from '../cadastro/VagasCard'
import styles from './Pages.module.css';

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

  function procurarVaga(){
    var procura = document.getElementById("procurar").value 

    fetch(`http://localhost:5000/vagas?name=${procura}`, {
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
}


 
    return(
        <div className={styles.cadastro_container}>
        <div className="row">
          <div className="col-md-12 text-center">
          <h1>Cadastro de Vagas</h1>
          </div>
        </div>
        <div className="row">
         <div className="col-md-12">
         <CadastroFormVagas handledSubmit={create} btntext="Cadastrar"/>
         </div>
          <div className="col-md-3"></div>
          <div className="col-md-6">
                <div className="input-group">
                 <input type="search" className="form-control rounded" placeholder="Buscar por vaga" aria-label="Search" name="procurar" id="procurar" aria-describedby="search-addon" />
                <button type="button" onClick={procurarVaga} className="btn btn-outline-primary"><i className="fa fa-search"></i> Buscar</button>
                </div>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-12"><br/></div>
          {vagas.length > 0 && vagas.map((vaga) =>(
        <VagasCard handleRemove={removeVaga} key={vaga.id} id={vaga.id} name={vaga.name} setor={vaga.setor} salario={vaga.salario} descricao={vaga.descricao} quantidade={vaga.qtd}/>
    ))}
    </div>
        </div> 
      )
}