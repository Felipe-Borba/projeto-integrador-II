import flowLogo from "../../assets/flow-logo-small.svg";
import twitterLogo from "../../assets/svg/twitter.svg";
import "./style.css";

export default function Footer() {
  return (
    <footer>
      <div className="footerTopSection">
        <div>
          <img src={flowLogo} alt="flow" />
        </div>
        <div className="footerTopSectionRight">
          <div>
            <p>Contato</p>
            <p>(48) 97531-1147</p>
            <p>contato@flow.com</p>
          </div>
          <div>
            <img src={twitterLogo} alt="twitter" />
          </div>
        </div>
      </div>
      <div className="footerBottomSection">
        <p>© 2023 FLOW. All rights reserved.</p>
        <div className="footerBottomSectionRight">
          <p>Política de Privacidade</p>
          <p>Termos de Uso</p>
        </div>
      </div>
    </footer>
  );
}
