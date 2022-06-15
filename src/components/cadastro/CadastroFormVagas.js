import { useState, useEffect } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './CadastroForm.module.css'

export default function CadastroFormVagas({handledSubmit, vagasData, btntext}){
    const [vaga, setVaga] = useState(vagasData || {})
    const [teste, setTeste] = useState([])
    
    const refreshPage = ()=>{
        window.location.reload();
     }
 
    const submit = (e) => {
        e.preventDefault()
        if(document.getElementById("name").value === ""){
            alert("Preencha todos os campos!")
        }else{
        handledSubmit(vaga)
        refreshPage()
        limpar()
        }    
    }

    function handleChange(e){
        setVaga({...vaga, [e.target.name]: e.target.value})
    }

    function limpar(){
        document.getElementById("name").value = ""
        document.getElementById("descricao").value = ""
        document.getElementById("setor").value = ""
        document.getElementById("salario").value = ""
        document.getElementById("qtd").value = ""
    }

    function habilitar(){
       var div = document.getElementById("divform")
       var divbtn = document.getElementById("divbtns")
       var button = document.getElementById("btnnovo")

       button.hidden = true
       divbtn.hidden = false
       div.hidden = false
    }

    function desabilitar(){
        var div = document.getElementById("divform")
        var divbtn = document.getElementById("divbtns")
        var button = document.getElementById("btnnovo")

        button.hidden = false
        divbtn.hidden = true
        div.hidden = true

        var elemento = document.getElementById("list-group");
        while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
        }

    }

    useEffect(() => {
        fetch('http://localhost:5000/testes', {
            method: 'GET',
            headers: {
                    'Content-Type': 'application/json',
                },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setTeste(data)
        })
        .catch((err) => console.log(err))
    },[])

    function handleTeste(e){
        setVaga({...vaga, teste: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
        })
    }

    function adicionarTestes() {
        var selectTestes = document.getElementById("xteste")
        var selectTestesId = selectTestes.options[selectTestes.selectedIndex].value;
        var selectTestesText = selectTestes.options[selectTestes.selectedIndex].text;
       

        var verifica = document.getElementById(selectTestesId);
        if(verifica !== null){
            alert(`Teste de ${selectTestesText} já adicionado`)
        }else if (selectTestesText !== "") {
            const li = document.createElement("li");
            li.setAttribute("id", selectTestesId);
            const textli = document.createTextNode(selectTestesText);
            li.appendChild(textli);
            li.className = "list-group-item list-group-item-dark";

            const buttom = document.createElement("button");
            const buttomText = document.createTextNode("X");
            buttom.appendChild(buttomText);
            buttom.className = "btn btn-danger";
            buttom.setAttribute("style", "float: right");
            buttom.onclick = () => {
                removerItem(parseInt(selectTestesId));
                return false;
            };

            document
                .getElementById("list-group")
                .appendChild(li)
                .appendChild(buttom);
        }
    }
    

    function removerItem(id) {
        const node = document.getElementById("list-group");
        var removido = document.getElementById(id);
        node.removeChild(removido);
    }

    return (
        <>
        <div className="row">
                <div className="col-lg-12 text-center">
                    <button id="btnnovo" onClick={habilitar} className="btn btn-primary"><i className="fa fa-plus"></i> Nova vaga</button>
                </div>
            </div>
        <form onSubmit={submit} className={styles.form}>
            <div className="row" id="divform" hidden={true}>
                <div className="col-md-4">
                    <Input type="text" text="Nome da vaga" id="name" name="name" placeholder="Descrição" handleOnChange={handleChange} value={vaga.name ? vaga.name:''} />
                </div>
                <div className="col-md-8">
                    <Input type="text" text="Descrição" id="descricao" name="descricao" placeholder="Descrição" handleOnChange={handleChange} value={vaga.descricao ? vaga.descricao:''} />
                </div>
                <div className="col-md-4">
                    <Input type="text" text="Setor" id="setor" name="setor" placeholder="Descrição" handleOnChange={handleChange} value={vaga.setor ? vaga.setor :''} />
                </div>
                <div className="col-md-2">
                    <Input type="text" text="Salario" id="salario" name="salario" placeholder="Descrição" handleOnChange={handleChange} value={vaga.salario ? vaga.salario :''} />
                </div>
                <div className="col-md-2">
                    <Input type="number" text="Quantidade" id="qtd" name="qtd" placeholder="Descrição" handleOnChange={handleChange} value={vaga.qtd ? vaga.qtd :''} />
                </div>
                <div className="col-md-3">
                <Select name="xteste" id="xteste" options={teste} text="Selecione os testes" handleOnChange={handleTeste} value={vaga.teste ? vaga.teste.id : ''} />
                </div>
                <div className="col-md-1" id="divbtn">
                    <button type="button" onClick={adicionarTestes} id="btnaddteste" className="btn btn-success"><i className="fa fa-plus-circle"></i></button>
                </div>
            </div>
            <ul className="list-group" id="list-group">
            </ul>
            <br/>
            <div className="row" id="divbtns" hidden={true}>
                <div className="col-md-3 text-center"><br/></div>
                <div className="col-md-3 text-center">
                    <SubmitButton text={btntext}/>
                </div>
                <div className="col-md-3 text-center">
                <button type="button" id="btncancel" onClick={desabilitar} className="btn btn-warning"><i className="fa fa-cancel"></i> Cancelar</button>
                </div>
            </div>
        </form>
        </>
    ) 
}