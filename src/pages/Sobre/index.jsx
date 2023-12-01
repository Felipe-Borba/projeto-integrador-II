import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import flowLogo from "../../assets/flow-logo-big.svg";
import "./style.css";

export const Sobre = () => {

    return (
    <>
        <div className="homeBgGirlAbout" />
        <Header/>
        <Main>
            <div className="flowImgLogoStyle"><img className="flowImgLogo" src={flowLogo} alt="Entre no flow" /></div>
            
            <div className="aboutUs">
                <p><h1>Sobre nós</h1>



                </p>
            </div>
        </Main>
        <Footer/>
    </>);
};