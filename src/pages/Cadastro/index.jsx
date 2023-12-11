import React, { useState } from "react";
import homeBg from "../../assets/home/background.png";
import ButtonSecondary from "../../components/Button/ButtonSecondary";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Main from "../../components/Main";
import "./style.css";

export const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const [erroSenha, setErroSenha] = useState("");

  //TODO explicar porque esse jeito não é recomendado
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "senha" || name === "confirmarSenha") {
      setErroSenha(
        formData.senha !== formData.confirmarSenha
          ? "As senhas não coincidem"
          : ""
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário enviados:", formData);
  };

  return (
    <>
      <div className="homeBg">
        <img src={homeBg} alt="" />
      </div>
      <Header />
      <Main>
        <div className="signIn">
          <form onSubmit={handleSubmit}>
            <h2>CADASTRO</h2>
            <Input
              name="nome"
              label={"Usuário"}
              type={"name"}
              value={formData.nome}
              onChange={handleChange}
              // placeholder="teste"
            />
            <Input
              name="email"
              label={"Email"}
              type={"email"}
              value={FormData.email}
              onChange={handleChange}
            />
            <Input
              name="senha"
              label={"Senha"}
              type={"password"}
              value={FormData.senha}
              onChange={handleChange}
            >
              <p>
                Senha <span>(mínimo 6 caracteres)</span>
              </p>
            </Input>
            <Input
              name="confirmarSenha"
              label={"Confirmar Senha"}
              type={"password"}
              value={FormData.confirmarSenha}
              onChange={handleChange}
            >
              <p>
                Senha <span>(mínimo 6 caracteres)</span>
              </p>
            </Input>

            <p style={{ color: "red" }}>{erroSenha}</p>
            <ButtonSecondary>Salvar</ButtonSecondary>
          </form>
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default Cadastro;
