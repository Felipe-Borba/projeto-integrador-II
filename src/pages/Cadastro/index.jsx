import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import React, { useState } from "react";
import "./style.css";
import Input from "../../components/Input";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import ButtonSecondary from "../../components/Button/ButtonSecondary";

export const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const [erroSenha, setErroSenha] = useState("");

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
      <div className="homeBgGirl" />
      <div className="homeBgDna" />
      <Header />
      <Main>
        <div className="signIn">
          <form onSubmit={handleSubmit}>
            <h2>Cadastro</h2>
            <Input
              label={"Usuario"}
              type={"name"}
              value={formData.nome}
              onChange={handleChange}
            />
            <Input
              label={"Email"}
              type={"email"}
              value={FormData.email}
              onChange={handleChange}
            />
            <Input
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
