import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import "./style.css";
import flowLogo from "../../assets/flow-logo-big.svg";
import { OptionCard } from "./OptionCard";
import homeCardOption1 from "../../assets/home/home-card-option-1.png";
import homeCardOption2 from "../../assets/home/home-card-option-2.png";
import homeCardOption3 from "../../assets/home/home-card-option-3.png";
import homeCardOption4 from "../../assets/home/home-card-option-4.png";
import homeCardSvg1 from "../../assets/svg/ticket-voucher.svg";
import homeCardSvg2 from "../../assets/svg/calendar-check.svg";
import homeCardSvg3 from "../../assets/svg/show.svg";
import homeCardSvg4 from "../../assets/svg/user-add.svg";
import homeCardReview1 from "../../assets/home/home-card-review-1.png";
import homeCardReview2 from "../../assets/home/home-card-review-2.png";
import homeCardReview3 from "../../assets/home/home-card-review-3.png";
import homeCardReview4 from "../../assets/home/home-card-review-4.png";
import ReviewCard from "./ReviewCard";

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

const appReview = [
  {
    image: homeCardReview1,
    name: "OLIVIA BANKS",
    review:
      "“Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim sint occaecat cupidatat non proident, sunt in culpa qui offsint occaecat cupidatat non proident, sunt in culpa qui off”",
  },
  {
    image: homeCardReview2,
    name: "DAVID MARSHALL",
    review:
      "“Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim sint occaecat cupidatat non proident, sunt in culpa qui offsint occaecat cupidatat non proident, sunt in culpa qui off”",
  },
  {
    image: homeCardReview3,
    name: "RODRIGO SILVA",
    review:
      "“Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim sint occaecat cupidatat non proident, sunt in culpa qui offsint occaecat cupidatat non proident, sunt in culpa qui off”",
  },
  {
    image: homeCardReview4,
    name: "MICHAEL OLIVER",
    review:
      "“Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim sint occaecat cupidatat non proident, sunt in culpa qui offsint occaecat cupidatat non proident, sunt in culpa qui off”",
  },
];

export const Home = () => {
  return (
    <>
      <div className="homeBgGirl" />
      <div className="homeDna" />
      <Header />
      <Main>
        <img className="homeFlowImgLogo" src={flowLogo} alt="Entre no flow" />
        <p className="homeSubLogo">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim
        </p>

        <div className="homeOptionsCard">
          <h1>NOSSAS OPÇÕES</h1>
          <div className="homeOptionsCardInner">
            {appOptions.map((i) => (
              <OptionCard {...i} />
            ))}
          </div>
        </div>

        <div className="homeReviewContainer">
          {appReview.map((i) => (
            <ReviewCard {...i} />
          ))}
        </div>
      </Main>
      <Footer />
    </>
  );
};
