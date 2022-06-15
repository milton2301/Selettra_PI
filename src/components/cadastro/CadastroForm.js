import { useState, useEffect } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './CadastroForm.module.css'

export default function CadastroForm({handledSubmit, candidatosData, btntext}){
    const [estadocivil, setEstadocivil] = useState([])
    const [sexo, setSexo] = useState([])
    const [vaga, setVagas] = useState([])
    const [candidato, setCandidatato] = useState(candidatosData || {})

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

    useEffect(() => {
        fetch('http://localhost:5000/estadocivil', {
            method: 'GET',
            headers: {
                    'Content-Type': 'application/json',
                },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setEstadocivil(data)
        })
        .catch((err) => console.log(err))
    },[])

    useEffect(() => {
        fetch('http://localhost:5000/sexo', {
            method: 'GET',
            headers: {
                    'Content-Type': 'application/json',
                },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setSexo(data)
        })
        .catch((err) => console.log(err))
    },[])


    const submit = (e) => {
        e.preventDefault()
        if( document.getElementById("name").value === ""
       || document.getElementById("cpf").value === ""
       ){
        alert("Por favor preencha todos os campos!")
       }
        handledSubmit(candidato)
        limpar()
    }

    function handleChange(e){
        setCandidatato({...candidato, [e.target.name]: e.target.value})
    }

    function handleVagaCandidatada(e){
        setCandidatato({...candidato, vagaCandidatada: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
        })
    }

    function handleEstadoCivil(e){
        setCandidatato({...candidato, estadoCivil: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
        })
    }

    function handleSexo(e){
        setCandidatato({...candidato, sexo: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
        })
    }

    function limpar(){
        document.getElementById("name").value = ""
        document.getElementById("cpf").value = ""
        document.getElementById("rg").value = ""
        document.getElementById("sexo").value = ""
        document.getElementById("datanascimento").value = ""
        document.getElementById("estadocivil").value = ""
        document.getElementById("idade").value = ""
        document.getElementById("nacionalidade").value = ""
        document.getElementById("telefone").value = ""
        document.getElementById("whatsapp").value = ""
        document.getElementById("email").value = ""
        document.getElementById("cep").value = ""
        document.getElementById("uf").value = ""
        document.getElementById("municipio").value = ""
        document.getElementById("rua").value = ""
        document.getElementById("numero").value = ""
        document.getElementById("complemento").value = ""
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <div className="row">
                <div className="col-md-4">
                    <Input type="text" required text="Nome do candidato" id="name" name="name" placeholder="Insira o nome completo do candidato" handleOnChange={handleChange} value={candidato.name ? candidato.name:''} />
                </div>
                <div className="col-md-3">
                    <Input type="text" text="CPF" name="cpf" id="cpf" placeholder="CPF" handleOnChange={handleChange} value={candidato.cpf ? candidato.cpf: ''} />
                </div>
                <div className="col-md-3">
                    <Input type="text" text="RG" name="rg" id="rg" placeholder="Número RG" handleOnChange={handleChange} value={candidato.rg ? candidato.rg: ''} />
                </div>
                <div className="col-md-2">
                    <Select name="sexo" id="sexo" text="Selecione o sexo" placeholder="Selecione" options={sexo} handleOnChange={handleSexo} value={candidato.sexo ? candidato.sexo.id : ''} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <Input type="date" name="datanascimento" id="datanascimento" text="Data de Nascimento" handleOnChange={handleChange} value={candidato.datanascimento ? candidato.datanascimento: ''} />
                </div>
                <div className="col-md-2">
                    <Select name="estadocivil" id="estadocivil" options={estadocivil} text="Estado Civil" handleOnChange={handleEstadoCivil} value={candidato.estadoCivil ? candidato.estadoCivil.id : ''} />
                </div>
                <div className="col-md-2">
                    <Input type="number" name="idade" id="idade" text="Idade" placeholder="Idade" handleOnChange={handleChange} value={candidato.idade} />
                </div>
                <div className="col-md-2">
                    <Input type="text" name="nacionalidade" id="nacionalidade" text="Nacionalidade" placeholder="Nacionalidade" handleOnChange={handleChange} value={candidato.nacionalidade ? candidato.nacionalidade : ''} />
                </div>
                <div className="col-md-3">
                    <Select name="vaga" id="vaga" options={vaga} text="Candidato a vaga" handleOnChange={handleVagaCandidatada} value={candidato.vagaCandidatada ? candidato.vagaCandidatada.id : ''} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <br/>
                    <h1>Dados de contatos</h1>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <Input type="text" name="telefone" id="telefone" text="Telefone" placeholder="(xx) x xxxx-xxxx" handleOnChange={handleChange} value={candidato.telefone ? candidato.telefone : ''} />
                </div>
                <div className="col-md-3">
                    <Input name="whatsapp" id="whatsapp" type="text" text="WhatsApp" placeholder="(xx) x xxxx-xxxx" handleOnChange={handleChange} value={candidato.whatsapp ? candidato.whatsapp : ''}/>
                </div>
                <div className="col-md-4">
                    <Input name="email" type="email" id="email" text="E-mail" placeholder="email@email.com" handleOnChange={handleChange} value={candidato.email ? candidato.email : ''}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                <br/>
                    <h1>Dados de endereços</h1>
                </div>
                <div className="col-md-3">
                    <Input name="cep" id="cep" type="text" text="CEP" placeholder="Informe seu CEP" handleOnChange={handleChange} value={candidato.cep ? candidato.cep : ''}/>
                </div>
                <div className="col-md-1">
                    <Input name="uf" id="uf" type="text" text="UF" placeholder="UF" handleOnChange={handleChange} value={candidato.uf ? candidato.uf : ''}/>
                </div>
                <div className="col-md-3">
                    <Input name="municipio" id="municipio" type="text" text="Municipio" placeholder="Municipio" handleOnChange={handleChange} value={candidato.municipio ? candidato.municipio : ''}/>
                </div>
                <div className="col-md-4">
                    <Input name="rua" id="rua" type="text" text="Rua" placeholder="Nome da rua" handleOnChange={handleChange} value={candidato.rua ? candidato.rua : ''}/>
                </div>
                <div className="col-md-2">
                    <Input name="numero" id="numero" type="text" text="Número" placeholder="Número" handleOnChange={handleChange} value={candidato.numero ? candidato.numero : ''}/>
                </div>
                <div className="col-md-3">
                    <Input name="complemento" id="complemento" type="text" text="Complemento" placeholder="Complemento" handleOnChange={handleChange} value={candidato.complemento ? candidato.complemento : ''}/>
                </div>

            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                <SubmitButton text={btntext}/>
                </div>
            </div>
        </form>
    )
}