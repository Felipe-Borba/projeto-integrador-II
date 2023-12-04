import React from "react";
import homeCardReview1 from "../../assets/about/about-card-review-1.png";
import homeCardReview2 from "../../assets/about/about-card-review-2.png";
import homeCardReview3 from "../../assets/about/about-card-review-3.png";
import homeCardReview4 from "../../assets/about/about-card-review-4.png";
import flowLogo from "../../assets/flow-logo-big.svg";
import homeBg from "../../assets/home/background.png";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import "./style.css";

export const Sobre = () => {
  return (
    <>
      <div className="homeBg">
        <img src={homeBg} alt="" />
      </div>
      <Header />
      <Main>
        <div className="flowImgLogoStyle">
          <img className="flowImgLogo" src={flowLogo} alt="Entre no flow" />
        </div>

        <div className="aboutAboutUs">
          <p>
            <h1>SOBRE NÓS</h1>
          </p>

          <div className="aboutInfoBox">
            <p>
              Lorem ipsum dolor sit amet. Ut fugiat aliquid nam consectetur
              perferendis et facilis voluptas vel deserunt minima est dolore
              recusandae et corporis earum hic atque recusandae! Ea consequuntur
              voluptas non fugiat consectetur a impedit illo! Et sint
              necessitatibus ex dolorem dolorem sed quis enim id enim quibusdam!
              Est quia praesentium ad velit quia ut accusantium quos qui vero
              dolores sit atque quia. Et fugit esse ad maxime corrupti non nihil
              veritatis non debitis amet non minus quibusdam. Ut ullam omnis et
              tempore quibusdam rem molestiae numquam. Aut ullam ducimus ad
              voluptatem optio est delectus galisum ab inventore illum. Ut vero
              possimus est odit repellat eum distinctio nemo et dolor enim ut
              labore libero. Id perspiciatis cupiditate a voluptatibus sunt eum
              dicta reiciendis qui sunt esse qui doloribus enim aut ullam omnis
              sed incidunt asperiores. Lorem ipsum dolor sit amet. Ut fugiat
              aliquid nam consectetur perferendis et facilis voluptas vel
              deserunt minima est dolore recusandae et corporis earum hic atque
              recusandae! Ea consequuntur voluptas non fugiat consectetur a tempore quibusdam rem molestiae numquam. Aut ullam ducimus ad
              voluptatem optio est delectus galisum ab inventore illum. Ut vero
              possimus est odit repellat eum distinctio nemo et dolor enim ut
              labore libero. Id perspiciatis cupiditate a voluptatibus sunt eum
              dicta reiciendis qui sunt esse qui doloribus enim aut ullam omnis
              sed incidunt asperiores. Lorem ipsum dolor sit amet. Ut fugiat
              aliquid nam consectetur perferendis et facilis voluptas vel
            </p>

            <div className="aboutIconContainer">
              <div class="aboutIcon">
                <img src={homeCardReview1} alt="icon1" />
              </div>
              <div class="aboutIcon">
                <img src={homeCardReview2} alt="icon2" />
              </div>
              <div class="aboutIcon">
                <img src={homeCardReview3} alt="icon3" />
              </div>
              <div class="aboutIcon">
                <img src={homeCardReview4} alt="icon4" />
              </div>
            </div>

            <div className="aboutIconContainer">
              <div class="aboutIconText">Bruno H</div>
              <div class="aboutIconText">Felipe B</div>
              <div class="aboutIconText">André L</div>
              <div class="aboutIconText">Leonardo M</div>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
};
