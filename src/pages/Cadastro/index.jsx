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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
              name="nome"
              value={FormData.nome}
              onChange={handleChange}
            />
        </label>

        <label>
          Email:
            <input 
              type="email" 
              name="email" 
              value={FormData.email} 
              onChange={handleChange}
            />
        </label>

        <label>
          Senha:
            <input 
              type="password" 
              name="senha" 
              value={FormData.senha} 
              onChange={handleChange}
            />
        </label>
        <label>
          Confirmar senha:
            <input 
              type="password" 
              name="confirmarSenha" 
              value={FormData.confirmarSenha} 
              onChange={handleChange}
            />
        </label>
        <p style={{ color: 'red' }}>{erroSenha}</p>
        <button type="submit" disabled={erroSenha !== ''}/>
      </form>

    </Main>
    <Footer/>
  </>);
};
  