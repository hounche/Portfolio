import { Container } from "./styles";
import cyrilmael from "../../assets/cyrilmael.webp";
import python from "../../assets/python.svg";
import java from "../../assets/java.svg";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import angularIcon from "../../assets/angular-icon.svg";
import gitIcon from "../../assets/git-icon.svg";
import githubIcon from "../../assets/github-icon.svg";
import nextjsIcon from "../../assets/nextjs-icon.svg";
import dockerIcon from "../../assets/docker-icon.svg";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <h2 data-aos="fade-left">À propos de moi</h2>

        <p data-aos="fade-left" data-aos-delay="100">
          Bonjour, je suis Cyril Maël Hounché, ingénieur logiciel basé à Paris, France.
          J'ai une passion pour la création de solutions logicielles innovantes et efficaces,
          mais également pour le DevOps.
        </p>

        <p data-aos="fade-left" data-aos-delay="200" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          Je développe des solutions logicielles, des applications web réactives, j'optimise des
          modèles d'apprentissage automatique et je mets en œuvre des services backend robustes.
        </p>

        <p data-aos="fade-left" data-aos-delay="300">
          Je travaille également avec des plateformes CMS telles que WordPress et Shopify afin d'optimiser
          la gestion de contenu ; j'ai aussi une bonne maîtrise de l'infographie avec Photoshop.
        </p>

        <div className="education" data-aos="fade-left" data-aos-delay="400">
          <h3>Éducation :</h3>
          <h4>Diplôme d'ingénieur Informaticien</h4>
          <p>3IL - Limoges, France</p>
          <p>Classes Préparatoires CPGE</p>
        </div>

        <h3 data-aos="fade-left" data-aos-delay="400">Voici mes principales compétences :</h3>

        <div className="hard-skills">
          {/* Groupe 1 */}
          <div className="skill-row">
            <div className="hability" data-aos="fade-up" data-aos-delay="100"><img src={python} alt="python" /></div>
            <div className="hability" data-aos="fade-up" data-aos-delay="150"><img src={java} alt="java" /></div>
            <div className="hability" data-aos="fade-up" data-aos-delay="200"><img src={angularIcon} alt="angular" /></div>
            <div className="hability" data-aos="fade-up" data-aos-delay="250"><img src={gitIcon} alt="git" /></div>
            <div className="hability" data-aos="fade-up" data-aos-delay="300"><img src={jsIcon} alt="JavaScript" /></div>
          </div>

          {/* Groupe 2 */}
          <div className="skill-row">
            <div className="hability" data-aos="fade-up" data-aos-delay="350"><img src={nextjsIcon} alt="nextjs" /></div>
            <div className="hability" data-aos="fade-up" data-aos-delay="400"><img src={githubIcon} alt="github" /></div>
            <div className="hability" data-aos="fade-up" data-aos-delay="450"><img src={typescriptIcon} alt="Typescript" /></div>
            <div className="hability" data-aos="fade-up" data-aos-delay="500"><img src={vueIcon} alt="Vue" /></div>
            <div className="hability" data-aos="fade-up" data-aos-delay="550"><img src={wordpress} alt="WordPress" /></div>
          </div>

          {/* Groupe 3 */}
          <div className="skill-row">
            <div className="hability" data-aos="fade-up" data-aos-delay="600"><img src={shopify} alt="Shopify" /></div>
            <div className="hability" data-aos="fade-up" data-aos-delay="650"><img src={htmlIcon} alt="HTML" /></div>
            <div className="hability" data-aos="fade-up" data-aos-delay="700"><img src={dockerIcon} alt="Docker" /></div>
            <div className="hability" data-aos="fade-up" data-aos-delay="750"><img src={cssIcon} alt="CSS" /></div>
            <div className="hability" data-aos="fade-up" data-aos-delay="800"><img src={boostrapIcon} alt="Bootstrap" /></div>
          </div>
        </div>
      </div>

      <div className="about-image" data-aos="fade-right" data-aos-delay="210">
        <img src={cyrilmael} alt="Cyril Maël Hounché" />
      </div>
    </Container>
  );
}
