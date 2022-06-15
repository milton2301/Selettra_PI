//import Container from '../layout/Container'
import style from './Pages.module.css'

import logoredondo from '../layout/imagens/logoRedondo.jpg'
import LinkButtom from '../layout/elements/LinkButton'

export default function Home(){

    return(
        <section className={style.home_container}>
            <h1>Bem vindo ao <span>Selettra Recruitament</span></h1>
            <p>
            Sistema de gestão para novos contratos de funcionários.
            </p>
            <img src={logoredondo} alt="Logo" />
            <LinkButtom to="/cadastro" text="Novo cadastro"/>
        </section>
    )
}