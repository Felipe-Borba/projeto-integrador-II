import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import React, { useState } from 'react';


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
    <div className="homeBgGirl" />
    <div className="dna" />
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
        <br/>
        <label>
          Email:
            <input 
              type="email" 
              className="email" 
              value={FormData.email} 
              onChange={handleChange}
            />
        </label>
        <br/>
        <label>
          Senha:
            <input 
              type="password" 
              className="senha" 
              value={FormData.senha} 
              onChange={handleChange}
            />
        </label>
        <br/>
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