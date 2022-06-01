import React from "react";
import './Main.css';
import PinkColor from "./PinkColor/PinkColor";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import Portfolio from "./Portfolio/Portfolio";

function Main() {

    return (
        <div className='main'>
            <PinkColor />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </div>
    );
}

export default Main;