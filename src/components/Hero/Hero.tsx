import { Container } from "./styles";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import telegram from "../../assets/telegram.svg";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <p data-aos="fade-up">
          Bonjour <img src={Hello} alt="Hello" width="20px" />, Je me prénomme
        </p>

        <h1 data-aos="fade-up" data-aos-delay="200">Cyril Maël Hounché</h1>
        <h3 data-aos="fade-up" data-aos-delay="400">Ingénieur Logiciel</h3>
        <p className="small-resume" data-aos="fade-up" data-aos-delay="600">
          Avec 2 années d'expériences
        </p>

        <div data-aos="fade-up" data-aos-delay="800">
          <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
        </div>

        <div className="social-media" data-aos="fade-up" data-aos-delay="1000">
          <a href="https://www.linkedin.com/in/ma%C3%ABl-cyril-ingenieur/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a href="https://github.com/hounche" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=33745258212" target="_blank" rel="noreferrer">
            <img src={whatsapp} alt="WhatsApp" />
          </a>
          <a href="https://t.me/maelhounche" target="_blank" rel="noreferrer">
            <img src={telegram} alt="Telegram" />
          </a>
        </div>
      </div>

      <div className="hero-image" data-aos="fade-right" data-aos-delay="1000">
        <img src={Illustration} alt="Illustration" />
      </div>
    </Container>
  );
}
