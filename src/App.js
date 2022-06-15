import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Candidatos from './components/pages/Candidatos';
import Contatos from './components/pages/Contatos';
import Cadastro  from './components/pages/Cadastro';

import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar'

import Container from './components/layout/Container';
import CadastroVagas from './components/pages/CadastroVagas';

function App() {

  return (
    <Router>
     <Navbar/>
     <Container customClass="min-height">
      <Routes>   
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/cadastro" element={<Cadastro/>}/>
          <Route path="/contatos" element={<Contatos/>}/>
          <Route path="/candidatos" element={<Candidatos/>}/>
          <Route path="/cadvagas" element={<CadastroVagas/>}/>
      </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
