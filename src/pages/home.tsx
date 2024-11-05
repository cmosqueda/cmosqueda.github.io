import React from "react";
import ButtonLink from "../components/buttonlink";
import {
  FileTrayFullOutline,
  ImagesOutline,
  LogoFacebook,
  LogoGithub,
  LogoInstagram,
  LogoLinkedin,
} from "react-ionicons";
import "../styles/home.css";
import profileImg from "../assets/1.png";
import About from "./about";
import SocialLink from "../components/sociallink";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <section className="homesection">
        <div className="homebanner">
          {/* banner pic */}
          <div className="profile-img">
            <img src={profileImg} alt="mypic1" />
          </div>

          {/* info */}
          <div className="homeinfo">
            <h1 className="title">Tyne</h1>
            <p className="subtitle">BSIT - III, Database and Information Systems</p>

            {/* social links */}
            <div>
              {/* facebook */}
              <SocialLink goto="https://web.facebook.com/christine.mosqueda.395">
                <LogoFacebook color={"#5055ff"} width="40px" height="40px"></LogoFacebook>
              </SocialLink>

              {/* instagram */}
              <SocialLink goto="https://www.instagram.com/tyne.exe/profilecard/?igsh=bng5Y2cybWJxa3dk">
                <LogoInstagram color={"#5055ff"} width="40px" height="40px"></LogoInstagram>
              </SocialLink>

              {/* github */}
              <SocialLink goto="https://github.com/cmosqueda">
                <LogoGithub color={"#5055ff"} width="40px" height="40px"></LogoGithub>
              </SocialLink>

              {/* linkedin */}
              <SocialLink goto="https://www.linkedin.com/in/christine-mosqueda-ba202b333/">
                <LogoLinkedin color={"#5055ff"} width="40px" height="40px"></LogoLinkedin>
              </SocialLink>
            </div>

            {/* button links */}
            <div>
              {/* projects */}
              <ButtonLink label="Projects" to="/projects">
                <FileTrayFullOutline color={"#ffffff"}></FileTrayFullOutline>
              </ButtonLink>

              {/* gallery */}
              <ButtonLink label="Gallery" to="/artgallery">
                <ImagesOutline color={"#ffffff"}></ImagesOutline>
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <About></About>

      <Footer></Footer>
    </>
  );
}

export default Home;
