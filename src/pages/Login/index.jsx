import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import homeBg from "../../assets/home/background.png";
import ButtonSecondary from "../../components/Button/ButtonSecondary";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Main from "../../components/Main";
import "./style.css";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário enviados:", formData);
    //TODO login
    navigate("/feed/felipe");
  };

  return (
    <>
      <div className="homeBg">
        <img src={homeBg} alt="" />
      </div>
      <Header />
      <Main>
        <div className="login">
          <form onSubmit={handleSubmit}>
            <h2>LOGIN</h2>
            <Input
              name="email"
              label={"Email"}
              type={"email"}
              value={FormData.email}
              onChange={({ label, value }) =>
                setFormData((prev) => ({ ...prev, [label]: value }))
              }
            />
            <Input
              name="senha"
              label={"Senha"}
              type={"password"}
              value={FormData.senha}
              onChange={({ label, value }) =>
                setFormData((prev) => ({ ...prev, [label]: value }))
              }
            />

            <ButtonSecondary>Avançar</ButtonSecondary>
          </form>
        </div>
      </Main>
      <Footer />
    </>
  );
}
