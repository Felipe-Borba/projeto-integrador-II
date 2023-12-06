import "./style.css";
import flowLogo from "../../assets/flow-logo-small.svg";
import ButtonLink from "../Button/ButtonLink";
import ButtonPrimary from "../Button/ButtonPrimary";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <Link to="/">
        <img src={flowLogo} alt="flow logo" />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre nós</Link>
          </li>
          <li>
            <Link href="/">Download App</Link>
          </li>
        </ul>
      </nav>

      <div>
        <ButtonLink onClick={() => navigate("/cadastro")}>
          Fazer cadastro
        </ButtonLink>
        <ButtonPrimary onClick={() => navigate("/login")}>Entrar</ButtonPrimary>
      </div>
    </header>
  );
}
