import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import "./style.css";
import flowLogo from "../../assets/flow-logo-big.png";
import { OptionCard } from "./OptionCard";
import homeCardOption1 from "../../assets/home/home-card-option-1.png";
import homeCardOption2 from "../../assets/home/home-card-option-2.png";
import homeCardOption3 from "../../assets/home/home-card-option-3.png";
import homeCardOption4 from "../../assets/home/home-card-option-4.png";
import homeCardSvg1 from "../../assets/svg/ticket-voucher.svg";
import homeCardSvg2 from "../../assets/svg/calendar-check.svg";
import homeCardSvg3 from "../../assets/svg/show.svg";
import homeCardSvg4 from "../../assets/svg/user-add.svg";

const appOptions = [
  {
    title: "PROCURAR UM EVENTO PERTO DE VOCÊ",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim",
    image: homeCardOption1,
    svg: homeCardSvg1,
  },
  {
    title: "PROCURAR UM EVENTO PERTO DE VOCÊ",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim",
    image: homeCardOption2,
    svg: homeCardSvg2,
  },
  {
    title: "PROCURAR UM EVENTO PERTO DE VOCÊ",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim",
    image: homeCardOption3,
    svg: homeCardSvg3,
  },
  {
    title: "PROCURAR UM EVENTO PERTO DE VOCÊ",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim",
    image: homeCardOption4,
    svg: homeCardSvg4,
  },
];

export const Home = () => {
  return (
    <>
      <div className="homeBgGirl" />
      <div className="dna" />
      <Header />
      <Main>
        <img className="flowImgLogo" src={flowLogo} alt="Entre no flow" />
        <p className="subLogo">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim
        </p>
        <div className="optionsCard">
          <h1>NOSSAS OPÇÕES</h1>
          <div className="optionsCardInner">
          {appOptions.map((i) => (
            <OptionCard {...i} />
          ))}
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
};
