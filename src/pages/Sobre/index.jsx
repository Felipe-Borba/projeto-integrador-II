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
                <p><h1>SOBRE NÓS</h1></p>

                <div className="infoBox">
                    <p><h3>Texto na caixa preta</h3>
                    <br />
                    Lorem ipsum dolor sit amet. Ut fugiat aliquid nam consectetur perferendis et facilis voluptas vel deserunt minima est dolore recusandae et corporis
                    earum hic atque recusandae! Ea consequuntur voluptas non fugiat consectetur a impedit illo!
                    Et sint necessitatibus ex dolorem dolorem sed quis enim id enim quibusdam! Est quia praesentium ad velit quia ut accusantium 
                    quos qui vero dolores sit atque quia. Et fugit esse ad maxime corrupti non nihil veritatis non debitis amet non minus quibusdam.
                    Ut ullam omnis et tempore quibusdam rem molestiae numquam. Aut ullam ducimus ad voluptatem optio est delectus galisum ab inventore illum. 
                    Ut vero possimus est odit repellat eum distinctio nemo et dolor enim ut labore libero. Id perspiciatis cupiditate a voluptatibus sunt eum dicta reiciendis qui
                     sunt esse qui doloribus enim aut ullam omnis sed incidunt asperiores.
                    </p>
                </div>
                
            </div>
        </Main>
        <Footer/>
    </>);
};