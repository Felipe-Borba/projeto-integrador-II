import "./style.css";
import flowLogo from "../../assets/flow-logo-small.svg";
import ButtonLink from "../Button/ButtonLink";
import ButtonPrimary from "../Button/ButtonPrimary";
import { userNavigate } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <img src={flowLogo} alt="flow logo" />

      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/sobre">Sobre nós</a>
          </li>
          <li>
            <a href="/">Download App</a>
          </li>
        </ul>
      </nav>

      <div>
        <ButtonLink onClick={() => Navigate("/cadastro")}>Fazer cadastro</ButtonLink>
        <ButtonPrimary>Entrar</ButtonPrimary>
      </div>
    </header>
  );
}
