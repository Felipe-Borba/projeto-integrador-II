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

export const Product = () => {
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

        <div className="productAboutUs">
          <p>
            <h1>NOSSO PRODUTO</h1>
          </p>

          <div className="productInfoBox">
            <img className="productPhoneImage" src="\src\assets\product\iphonescreen.png" alt="failed" />
            
            <div className="productText">
              <h1>PROBLEMA</h1>
              <p>
              Lorem ipsum dolor sit amet. Ut fugiat aliquid nam consectetur
              perferendis et facilis voluptas vel deserunt minima est dolore
              recusandae et corporis earum hic atque recusandae! Ea consequuntur
              voluptas non fugiat consectetur a impedit illo! Et sint
              necessitatibus ex dolorem dolorem sed quis enim id enim quibusdam!
              Est quia praesentium ad velit quia ut accusantium quos qui vero
              dolores sit atque quia. Et fugit esse ad maxime corrupti non nihil
              <h1>PROPOSTA</h1>
              Lorem ipsum dolor sit amet. Ut fugiat aliquid nam consectetur
              perferendis et facilis voluptas vel deserunt minima est dolore
              recusandae et corporis earum hic atque recusandae! Ea consequuntur
              voluptas non fugiat consectetur a impedit illo! Et sint
              necessitatibus ex dolorem dolorem sed quis enim id enim quibusdam!
              <h1>OBJETIVO</h1>
              Lorem ipsum dolor sit amet. Ut fugiat aliquid nam consectetur
              perferendis et facilis voluptas vel deserunt minima est dolore
              recusandae et corporis earum hic atque recusandae! Ea consequuntur
              voluptas non fugiat consectetur a impedit illo! Et sint
              necessitatibus ex dolorem dolorem sed quis enim id enim quib

              </p>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
};
