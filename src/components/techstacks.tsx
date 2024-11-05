import "../styles/techstacks.css";
import LogoHTML from "../assets/svg/html5";
import LogoCSS from "../assets/svg/css3";
import LogoJS from "../assets/svg/javascript";
import LogoTS from "../assets/svg/typescript";
import LogoPython from "../assets/svg/python";
import LogoJava from "../assets/svg/java";
import LogoFigma from "../assets/svg/figma";
import LogoCanva from "../assets/svg/canva";
import LogoGoogleSheets from "../assets/svg/googlesheets";
import LogoGoogleDocs from "../assets/svg/googledocs";
import LogoReact from "../assets/svg/react";
import LogoGithub from "../assets/svg/github";
import LogoGit from "../assets/svg/git";
import LogoPacketTracer from "../assets/svg/packettracer";
import LogoChatGPT from "../assets/svg/chatgpt";

const TechStacks = () => {
  return (
    <>
      <div className="slider">
        <h1>Tech Stacks</h1>
        <div className="slider-list">
          {/* html */}
          <div className="slider-item">
            <LogoHTML></LogoHTML>
          </div>

          {/* css */}
          <div className="slider-item">
            <LogoCSS></LogoCSS>
          </div>

          {/* javascript */}
          <div className="slider-item">
            <LogoJS></LogoJS>
          </div>

          {/* typescript */}
          <div className="slider-item">
            <LogoTS></LogoTS>
          </div>

          {/* python */}
          <div className="slider-item">
            <LogoPython></LogoPython>
          </div>

          {/* java */}
          <div className="slider-item">
            <LogoJava></LogoJava>
          </div>

          {/* figma */}
          <div className="slider-item">
            <LogoFigma></LogoFigma>
          </div>

          {/* canva */}
          <div className="slider-item">
            <LogoCanva></LogoCanva>
          </div>

          {/* google spreadsheet */}
          <div className="slider-item">
            <LogoGoogleSheets></LogoGoogleSheets>
          </div>

          {/* google docs */}
          <div className="slider-item">
            <LogoGoogleDocs></LogoGoogleDocs>
          </div>

          {/* react */}
          <div className="slider-item">
            <LogoReact></LogoReact>
          </div>

          {/* github */}
          <div className="slider-item">
            <LogoGithub></LogoGithub>
          </div>

          {/* git */}
          <div className="slider-item">
            <LogoGit></LogoGit>
          </div>

          {/* cisco packet tracer */}
          <div className="slider-item">
            <LogoPacketTracer></LogoPacketTracer>
          </div>

          {/* chatgpt */}
          <div className="slider-item">
            <LogoChatGPT></LogoChatGPT>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStacks;
