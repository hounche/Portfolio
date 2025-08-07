import { Container } from "./styles";
import cyrilmael from "../../assets/cyrilmael.webp";
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import angularIcon from "../../assets/angular-icon.svg";
import gitIcon from "../../assets/git-icon.svg";
import githubIcon from "../../assets/github-icon.svg";
import nextjsIcon from "../../assets/nextjs-icon.svg";
import dockerIcon from "../../assets/docker-icon.svg";


export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>A propos de moi</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Bonjour, je suis Cyril Maël Hounché ingénieur logiciel basé à Paris, France. J'ai une passion pour la création de solutions logicielles innovantes et efficaces, mais également pour le DevOPS
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            Je développe des solutions logiciels, des applications web réactives, j'optimise des modèles d'apprentissage automatique et je mets en œuvre des services backend robustes.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            Je travaille également avec des plateformes CMS telles que WordPress et Shopify afin d'optimiser la gestion de contenu, j'ai également une bonne maitrise de l'infographie avec Photoshop.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4> Diplôme d'ingénieur Informaticien</h4>
            <p>3IL - Limoges, France</p>
            <p>Classes Préparatoires CPGE</p>
          </div>
        </ScrollAnimation>
        {}

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Voici mes principales compétences:</h3>
        </ScrollAnimation>

        <div className="hard-skills">

  {/* Groupe 1 */}
  <div className="skill-row">
    <div className="hability">
      <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
        <img src={python} alt="python" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
        <img src={java} alt="java" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
        <img src={angularIcon} alt="angular" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
        <img src={gitIcon} alt="git" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
        <img src={jsIcon} alt="JavaScript" />
      </ScrollAnimation>
    </div>
  </div>

  {/* Groupe 2 */}
  <div className="skill-row">
    <div className="hability">
      <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
        <img src={nextjsIcon} alt="nextjs" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
        <img src={githubIcon} alt="github" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
        <img src={typescriptIcon} alt="Typescript" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
        <img src={vueIcon} alt="Vue" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
        <img src={wordpress} alt="Wordpress" />
      </ScrollAnimation>
    </div>
  </div>

  {/* Groupe 3 */}
  <div className="skill-row">
    <div className="hability">
      <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
        <img src={shopify} alt="shopify" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation animateIn="fadeInUp" delay={0.21 * 1000}>
        <img src={htmlIcon} alt="Html" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation animateIn="fadeInUp" delay={0.22 * 1000}>
        <img src={dockerIcon} alt="docker" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation animateIn="fadeInUp" delay={0.23 * 1000}>
        <img src={cssIcon} alt="Css" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation animateIn="fadeInUp" delay={0.24 * 1000}>
        <img src={boostrapIcon} alt="bootstrap" />
      </ScrollAnimation>
    </div>
  </div>

</div>



      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={cyrilmael} alt="Cyril Maël Hounché" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
