import {Link} from 'react-router-dom'

import style from './Navbar.module.css'
import Container from './Container'
import logo from './imagens/logo.jpg'

export default function Navbar(){
    return(
        <nav className={style.navbar}>
           <Container>
            <Link to='/'><img src={logo} alt='logo'></img></Link>
            <ul className={style.list}>
                <li className={style.item}> <Link to='/'>Home</Link></li>
                <li className={style.item}> <Link to='/cadastro'>Cadastro</Link></li>
              {/*   <li className={style.item}><Link to='/contatos'>Contatos</Link></li> */}
                <li className={style.item}><Link to='/candidatos'>Candidatos</Link></li>
                <li className={style.item}><Link to='/cadvagas'>Vagas</Link></li>
            </ul>
      </Container>
      </nav>
    )
}