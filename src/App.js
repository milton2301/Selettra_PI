import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Candidatos from './components/pages/Candidatos';
import Candidato from './components/pages/Candidato';
import Contatos from './components/pages/Contatos';
import Cadastro  from './components/pages/Cadastro';

import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar'

import Container from './components/layout/Container';
import CadastroVagas from './components/pages/CadastroVagas';
import Vaga from './components/pages/Vaga';

function App() {

  return (
    <Router>
     <Navbar/>
     <Container customClass="min-height">
      <Routes>   
          <Route exact path="/" element={<Home/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/contatos" element={<Contatos/>}/>
          <Route path="/candidatos" element={<Candidatos/>}/>
          <Route path="/cadvagas" element={<CadastroVagas/>}/>
          <Route path="/candidato/:id" element={<Candidato/>}/>
          <Route path="/vaga/:id" element={<Vaga/>}/>
      </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
