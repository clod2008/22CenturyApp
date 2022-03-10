import React from "react";


import Header from "../components/Header/Header";
import { CardDeck } from "../components/CardDeck/CardDeck";
import { bgHome } from "../assets";
import { BannerHome } from "../components/BannerHome/BannerHome";
import { Novedades } from "../components/Novedades/Novedades";
import { LogoCarousel } from "../components/LogoCarousel/LogoCarousel";



// import { IoHome } from "react-icons/io5";
const Home = () => {

  return (
    <>
      <Header
        image={bgHome}
        title={[
          "The future is not waiting",
        `  22nd Century Capital invests with our gaze focused far ahead and our grasp firmly on the present.
          `,
        ]}
        page={true}
      />

    </>
  );
};
export default Home;
