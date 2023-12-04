import "./style.css";
import "./HeaderUser.css";
import flowLogo from "../../assets/flow-logo-small.svg";
import ButtonLink from "../Button/ButtonLink";
import ButtonPrimary from "../Button/ButtonPrimary";
import { useNavigate } from "react-router-dom";

export default function HeaderUser() {
  const navigate = useNavigate();
  return (
    <header>
      <ButtonLink
        onClick={() => {
          //TODO refresh
        }}
      >
        <img src={flowLogo} alt="flow logo" />
      </ButtonLink>

      <div>
        <ButtonPrimary
          onClick={() => {
            //TODO desloga o usuário e volta para a home
            //TODO esvazia a stack
            navigate("/")
          }}
        >
          Sair
        </ButtonPrimary>
      </div>
    </header>
  );
}
