import Container from "../layout/Container"

export default function Cadastro({props}) {




    return(
        <Container>
            <div className="row">
            <div className="col-md-12"><br /></div>
          <div className="col-md-12">
          <form className="form-control">
            <div className="row">
            <div className="col-md-12 text-center">
                <h5>Cadastro Candidato</h5>
                </div>
            <div className="col-md-10">
              <label className="title" htmlFor="name">Nome</label>
              <input id="name" name="name" className="form-control" placeholder=""/>
            </div>
            <div className="col-md-2">
              <label className="title" htmlFor="idade">Idade</label>
              <input id="idade" name="idade" className="form-control" placeholder=""/>
            </div>
            <div className="col-md-6">
              <label className="title" htmlFor="cpf">CPF</label>
              <input id="cpf" name="cpf" className="form-control" placeholder=""/>
            </div>
            <div className="col-md-6">
              <label className="title" htmlFor="rg">RG</label>
              <input id="rg" name="rg" className="form-control" placeholder=""/>
            </div>
            <div className="col-md-6">
              <label className="title" htmlFor="nacionalidade">Nacionalidade</label>
              <input id="nacionalidade" name="nacionalidade" className="form-control" placeholder=""/>
            </div>
            <div className="col-md-6">
              <label className="title" htmlFor="estadocivil">Estado civil</label>
              <select className="form-control" name="estadocivil" id="estadocivil">
                <option value="" selected></option>
                <option value="Casado">Casado</option>
                <option value="Solteiro">Solteiro</option>
                <option value="Divorciado">Divorciado</option>
              </select>
            </div>
            </div><br/>
            <div className="row">
              <div className="col-md-12 text-center">
                <h5>Endereço e Contatos</h5>
              </div>
              <div className="col-md-4">
                <label className="title" htmlFor="cep">CEP</label>
                <input id="cep" name="cep" className="form-control" placeholder=""/>
              </div>
              <div className="col-md-6">
                <label className="title" htmlFor="rua">Rua</label>
                <input id="rua" name="rua" className="form-control" placeholder=""/>
              </div>
              <div className="col-md-2">
                <label className="title" htmlFor="numero">Número</label>
                <input id="numero" name="numero" className="form-control" placeholder=""/>
              </div>
              <div className="col-md-6">
                <label className="title" htmlFor="bairro">Bairro</label>
                <input id="bairro" name="bairro" className="form-control" placeholder=""/>
              </div>
              <div className="col-md-6">
                <label className="title" htmlFor="cidade">Cidade</label>
                <input id="cidade" name="cidade" className="form-control" placeholder=""/>
              </div>
              <div className="col-md-6">
                <label className="title" htmlFor="estado">Estado</label>
                <input id="estado" name="estado" className="form-control" placeholder=""/>
              </div>
              <div className="col-md-3">
                <label className="title" htmlFor="uf">UF</label>
                <input id="uf" name="uf" className="form-control" placeholder=""/>
              </div>
              <div className="row">
              <div className="col-md-6">
                <label className="title" htmlFor="telefone">Telfone</label>
                <input id="telefon" name="telefone" className="form-control" placeholder=""/>
              </div>
              <div className="col-md-6">
                <label className="title" htmlFor="whatsapp">WhatsApp</label>
                <input id="whatsapp" name="whatsapp" className="form-control" placeholder=""/>
              </div>
              <div className="col-md-6">
                <label className="title" htmlFor="email">Email</label>
                <input id="email" name="email" className="form-control" placeholder=""/>
              </div>
              <div className="col-md-3">
                <label className="title" htmlFor="curriculum">Curriculum</label>
                <input id="curriculum" name="curriculum" type="file" className="form-control" placeholder=""/>
              </div>
              <div className="col-md-3">
                <br/>
                <button className="btn btn-primary">Upload</button>
              </div>
              <div className="col-md-12 text-center">
                <br/>
                <button className="btn btn-success">Salvar <i className="fa fa-save"></i></button>
              </div>
              </div>
            </div>
          </form>
          </div>
          </div>
        </Container>
    )
}