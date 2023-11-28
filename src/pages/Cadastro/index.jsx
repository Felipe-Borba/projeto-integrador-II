import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";


export const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  const [erroSenha, setErroSenha] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'senha' || name === 'confirmarSenha') {
      setErroSenha(
        formData.senha !== formData.confirmarSenha
          ? 'As senhas não coincidem'
          : ''
      );
    }
  }  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário enviados:', formData);
  };

  return (
  <>
    <Header/>
    <Main>
      <form onSubmit={handleSubmit}>
        <label>
          Usuario:
            <input 
              type="name"
              className="nome"
              value={FormData.nome}
              onChange={handleChange}
            />
        </label>

        <label>
          Email:
            <input 
              type="email" 
              className="email" 
              value={FormData.email} 
              onChange={handleChange}
            />
        </label>

        <label>
          Senha:
            <input 
              type="password" 
              className="senha" 
              value={FormData.senha} 
              onChange={handleChange}
            />
        </label>
        <label>
          Confirmar senha:
            <input 
              type="password" 
              className="confirmarSenha" 
              value={FormData.confirmarSenha} 
              onChange={handleChange}
            />
        </label>
        <p style={{ color: 'red' }}>{erroSenha}</p>
        <button id="btn" type="submit" disabled={erroSenha !== ''}/>
      </form>

    </Main>
    <Footer/>
  </>);
};

export default Cadastro;  