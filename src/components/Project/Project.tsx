import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import playstoreIcon from "../../assets/playstore-icon.svg";
import externalLink from "../../assets/external-link.svg";

import arzoo1 from "../../assets/arzoo1.png";
import arzoo2 from "../../assets/arzoo2.png";
import arzoo3 from "../../assets/arzoo3.png";

import ecoute2 from "../../assets/ecoute2.png";
import ecoute3 from "../../assets/ecoute3.png";

import pub1 from "../../assets/pub1.png";
import pub2 from "../../assets/pub2.png";
import pub3 from "../../assets/pub3.png";

import dom1 from "../../assets/dom1.png";
import dom2 from "../../assets/dom2.png";
import dom3 from "../../assets/dom3.png";

import robot1 from "../../assets/robot1.png";
import robot2 from "../../assets/robot2.png";
import robot3 from "../../assets/robot3.png";

import free1 from "../../assets/free1.png";
import free2 from "../../assets/free2.png";
import free3 from "../../assets/free3.png";

export function Project() {
  return (
    <Container id="project">
      <h2>Mes expériences professionnelles & projets personels</h2>
      <br />
      <h3>Expériences Professionnelles</h3>

      <div className="timeline">
        <div className="timeline-item left" data-aos="fade-up">
          <h4>Développeur Fullstack Java / Angular</h4>
          <p><em>CDD</em> - <em>Au sein de JExcellence</em><br />Nov 2024 – Juin 2025</p>
          <p><strong>Synthèse :</strong> Conception et développement de systèmes applicatifs robustes et scalables, avec un focus sur la sécurité, la performance et l'expérience utilisateur, dans des environnements techniques modernes.</p>
          <p><strong>Domaine d’intervention :</strong></p>
          <ul>
            <li>- Analyse et recueil des besoins métiers et rédaction des spécifications techniques.</li>
            <li>- Élaboration d’architectures logicielles propres et évolutives.</li>
            <li>- Conception et implémentation de solutions full-stack (Java, Spring Boot, Angular).</li>
            <li>- Développement d’API sécurisées avec Spring Security et JWT.</li>
            <li>- Tests unitaires et d’intégration (JUnit5, Mockito).</li>
            <li>- Interfaces web responsives et intuitives (Angular, Next.js).</li>
            <li>- Développement de solutions web/mobile avec Firebase.</li>
            <li>- Gestion de bases de données PostgreSQL et migrations Liquibase.</li>
            <li>- Mise en place de pipelines CI/CD (Azure DevOps).</li>
            <li>- Déploiement et optimisation via Railway et Vercel.</li>
          </ul>
          <p><strong>Environnement technique :</strong></p>
          <p>Java 23, Spring Boot 3.x, Angular 19, Next.js 15, PostgreSQL, Firebase, H2 (Tests), Spring Security, JWT, Liquibase, Maven, JUnit5, Mockito, IntelliJ IDEA, VSCode, Jenkins, Azure DevOps, Railway, Vercel.</p>
        </div>

        <div className="timeline-item right" data-aos="fade-up" data-aos-delay="100">
          <br />
          <h4>Développeur Fullstack Java Angular / Python</h4>
          <p><em>Alternance</em> - <em>Au sein de GalaadInvest</em><br />Décembre 2023 – Septembre 2024</p>
          <p><strong>Synthèse :</strong> Développement d'une Application d'Intégration de Données et de Reporting et Conception des modèles intelligents pour l’automatisation des taches. </p>
          <p><strong>Domaine d’intervention :</strong></p>
          <ul>
            <li>- Analyse des besoins métiers et rédaction des spécifications techniques.</li>
            <li>- Planification des taches.</li>
            <li>- Conception et développement de pipelines d’intégration de données dans Hadoop.</li>
            <li>- Développement d’applications full-stack (Java, Spring Boot, Angular).</li>
            <li>- Développement d’API sécurisées avec Spring Security et JWT.</li>
            <li>- Tests unitaires et d’intégration (JUnit5, Mockito).</li>
            <li>- Interfaces web responsives et intuitives (Angular, Next.js).</li>
            <li>- Intégration des données dans postegreSQL</li>
            <li>- Déploiement et optimisation via Jenkins.</li>
          </ul>
          <p><strong>Environnement technique :</strong></p>
          <p>Python, Java, Angular, Spark, Kafka, MLflow, DataRobot, Spyder, JupiterNotebook, JUnit, Jenkins, IntelliJ, Hadoop, SpringBoot, PostgreSQL.</p>
        </div>

        <div className="timeline-item left" data-aos="fade-up" data-aos-delay="200">
          <h4>Développeur Python & Testeur</h4>
          <p><em>Stage</em> - <em>Au sein de TotalEnergies</em><br />Avril 2023 – Septembre 2023</p>
          <p><strong>Synthèse :</strong> Développement d’un système d’une suite de tests automatisés afin de garantir et de faciliter la tâche des testeurs.</p>
          <p><strong>Synthèse :</strong> Développement d’un système de tests automatisés visant à faciliter le travail des testeurs et garantir la stabilité applicative.</p>
          <p><strong>Domaine d’intervention :</strong></p>
          <ul>
            <li>Analyse des besoins métiers et des flux de données.</li>
            <li>Évaluation et sélection de solutions techniques adaptées.</li>
            <li>Conception d’une suite de tests automatisés couvrant les scénarios critiques.</li>
            <li>Développement de scripts de test en Python (PyTest).</li>
            <li>Optimisation des pipelines CI/CD avec Jenkins (tests + déploiement).</li>
            <li>Validation des tests et contribution à la fiabilité des livraisons.</li>
          </ul>
          <p><strong>Environnement technique :</strong></p>
          <p>Python, PyTest, Jenkins, GitHub, JavaScript</p>
        </div>

        <div className="timeline-item right" data-aos="fade-up" data-aos-delay="300">
          <h4>Développeur Python/IA</h4>
          <p><em>Projet personnel / R&D</em><br />2024</p>
          <p><strong>Synthèse :</strong> Conception et développement d’un système de publicité intelligent visant à identifier les besoins ciblés des prospects pour améliorer la visibilité marketing de l’entreprise.</p>
          <p><strong>Domaine d’intervention :</strong></p>
          <ul>
            <li>Analyse des besoins métiers et des attentes marketing.</li>
            <li>Évaluation des solutions techniques pour le ciblage intelligent.</li>
            <li>Conception de modèles d’intelligence artificielle pour l’analyse des données.</li>
            <li>Segmentation locale des données utilisateurs.</li>
            <li>Développement de l’interface graphique pour l’affichage des publicités dynamiques.</li>
            <li>Mise en place de pipelines CI/CD pour automatiser le déploiement.</li>
            <li>Validation des tests et vérification de la performance système.</li>
          </ul>
          <p><strong>Environnement technique :</strong></p>
          <p>Python, Bootstrap, WebSocket, JavaScript, HTML/CSS</p>
        </div>

        <div className="timeline-item left" data-aos="fade-up" data-aos-delay="400"><br />
          <h4>Développeur Web & Responsable des Logs</h4>
          <p><em>JANGOLO — Cameroun</em><br />Juin 2021 – Août 2021</p>
          <p><strong>Synthèse :</strong> Développement d’un système de monitoring des logs pour la détection d’anomalies et de cyberattaques.</p>
          <p><strong>Domaine d’intervention :</strong></p>
          <ul>
            <li>Analyse et compréhension des besoins métiers en matière de sécurité et de supervision.</li>
            <li>Évaluation des solutions techniques de centralisation et visualisation des logs.</li>
            <li>Conception d’une architecture de monitoring basée sur la stack ELK (Elasticsearch, Logstash, Kibana).</li>
            <li>Développement backend et frontend pour la collecte et la visualisation des logs.</li>
            <li>Mise en place de pipelines CI/CD pour automatiser le processus de déploiement.</li>
            <li>Réalisation de tests de validation pour garantir la fiabilité du système.</li>
          </ul>
          <p><strong>Environnement technique :</strong></p>
          <p>Laravel, ELK (Elasticsearch, Logstash, Kibana), JUnit, HTML/CSS</p>
        </div>
      </div>

      <br />
      <h3>Projets</h3>
      <br />

      <div className="projects">
        {/* flipInX -> AOS flip-left */}
        <div className="project" data-aos="flip-left">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Dossier</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://github.com/hounche/PraiseWave" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://www.cmfipraise.com/" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>PraiseWave</h3>
            <p>
              Application de gestion des églises, permettant aux utilisateurs de visualiser les musiques, les dons et les activités d'une. Développée avec React, Node.js et MongoDB, elle offre une interface utilisateur intuitive et des fonctionnalités robustes pour la gestion des données.
            </p>
            <p>Nb : Veuillez l'ouvrir en navigation privée car elle utilise des cookies pour ses fonctionnalités.</p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Java</li>
              <li>ReactNative</li>
              <li>TypeScript</li>
              <li>JUnit</li>
            </ul>
          </footer>
        </div>

        <div className="project" data-aos="flip-left" data-aos-delay="150">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Dossier</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://github.com/jveigne/recueilztfawards" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" />
              </a>
              <a href="https://www.accueilztfawards.com/" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>ZTF Awards</h3>
            <p> Application web mobile, permettant aux utilisateurs d'avoir une vision globale d'une cérémonie évênementielle. L'application peut également s'obtenir à travers le scanne d'un Qr-code </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>NextJS 15</li>
              <li>JAVA</li>
              <li>FireBase</li>
              <li>API Rest</li>
            </ul>
          </footer>
        </div>

        <div className="project" data-aos="flip-left" data-aos-delay="300">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Dossier</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://play.google.com/store/apps/details?id=org.cmfi.cmfipraise" target="_blank" rel="noreferrer">
                <img src={playstoreIcon} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>CMFIPraise</h3>
            <p>
              Application mobile de musiques chrétiennes, permettant aux utilisateurs de découvrir et des chants religieux. Développée avec React Native, elle offre une expérience utilisateur fluide et intuitive, avec une interface moderne et des fonctionnalités de recherche avancées.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Java</li>
              <li>ReactNative</li>
              <li>API Rest</li>
            </ul>
          </footer>
        </div>

        <div className="project" data-aos="flip-left" data-aos-delay="450">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Dossier</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://spotter-app-sepia.vercel.app/" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Spotter</h3>
            <p>Application de gestion de la qualité première des produits.</p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Java</li>
              <li>Angular</li>
              <li>Vercel</li>
              <li>MySQL</li>
            </ul>
          </footer>
        </div>

        <div className="project" data-aos="flip-left" data-aos-delay="600">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>BAI</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://olivedrab-hornet-656554.hostingersite.com/" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>BAI</h3>
            <p>Projet freelance pour le compte d'un particulier, qui souhaitais développer son site internet et application mobile.</p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>TypeScript</li>
              <li>Java</li>
              <li>Vercel</li>
            </ul>
          </footer>
        </div>

        <div className="project" data-aos="flip-left" data-aos-delay="750">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Dossier</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://preview--blessed-gatherings-planner.lovable.app/" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Gestion des églises</h3>
            <p>Application permettant de gérer les églises établies dans plusieurs villes, ou pays.</p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>FireBase</li>
              <li>Java</li>
              <li>TypeScript</li>
            </ul>
          </footer>
        </div>
      </div>

      <br /><br /><br />
      <h1>Quelques Captures d'écrans d'autres projets plus concrets</h1>

      <div className="captures">
        {/* Fades latéraux */}
        <div className="capturesline left" data-aos="fade-left">
          <h4>Ar Zoo</h4>
          <p><strong>Explication du projet :</strong></p>
          <ul>
            <li>
              Projet réalisé pour Maxime Balloufaud, un doctorant au Laboratoire HAVAE.
              AR-ZOO fait partie du projet TERAPACE. Développement d'un Zoo en réalité augmentée.
            </li>
          </ul>
          <br />
          <p><strong>Environnement technique :</strong></p>
          <p>C#, Azure DevOPS, Unity, Visual Studio, GitHub, React Native.</p>
          <div className="captures-images">
            <img src={arzoo1} alt="Capture écran ARZoo1" />
            <img src={arzoo2} alt="Capture écran ARZoo2" />
            <img src={arzoo3} alt="Capture écran ARZoo3" />
          </div>
        </div>

        <div className="capturesline right" data-aos="fade-right">
          <h4>Sensation_Détection</h4>
          <p><strong>Explication du projet :</strong></p>
          <ul>
            <li>
              Ce système permet de détecter le ressenti des utilisateurs à travers de la reconnaissance vocale. 
              Il est capable de détecter les émotions telles que la joie, la tristesse, la colère, etc.
              Ps : Il peut également être utile pour les entreprise dans le secteur de la comm ou bancaire
            </li>
          </ul>
          <br />
          <p><strong>Environnement technique :</strong></p>
          <p>Python, IA, WebSocket, JavaScript, Laravel, Unity, Visual Studio, GitHub</p>
          <div className="captures-images">
            <img src={ecoute2} alt="Capture écran ecoute2" />
            <img src={ecoute3} alt="Capture écran ecoute3" />
          </div>
        </div>

        <div className="capturesline left" data-aos="fade-left">
          <h4>Mini App robot</h4>
          <p><strong>Explication du projet :</strong></p>
          <ul>
            <li>
              Cette mini application développer en React Native, me permet d'effectuer une recherche ponctuelle 
              Dans une liste de robots, et permet de ressortir le robot correspondant à la recherche.
            </li>
          </ul>
          <br />
          <p><strong>Environnement technique :</strong></p>
          <p>Python, WebSocket JavaScript, Bootstrap, CSS, IA, Visual Studio, GitHub, React Native.</p>
          <div className="captures-images">
            <img src={robot1} alt="Capture écran robot1" /><br /><br />
            <img src={robot2} alt="Capture écran robot2" /><br /><br />
            <img src={robot3} alt="Capture écran robot3" /><br /><br />
          </div>
        </div>

        <div className="capturesline right" data-aos="fade-right">
          <h4>Pub AI</h4>
          <p><strong>Explication du projet :</strong></p>
          <ul>
            <li>
              Développement d'un système de publicité intelligent basé sur la reconnaissance faciale, 
              permettant l'identification du genre et de l'âge des utilisateurs afin d'optimiser l'expérience utilisateur 
              et d'améliorer les stratégies marketing d'une entreprise.
            </li>
          </ul>
          <br />
          <p><strong>Environnement technique :</strong></p>
          <p>Python, IA, Visual Studio, GitHub, JavaScript</p>
          <div className="captures-images">
            <img src={pub1} alt="Capture écran free1" />
            <img src={pub2} alt="Capture écran free2" />
            <img src={pub3} alt="Capture écran free3" />
          </div>
        </div>

        <div className="capturesline left" data-aos="fade-left">
          <h4>Free JS</h4>
          <p><strong>Explication du projet :</strong></p>
          <ul>
            <li>
              Ici, je voulais juste me faire plaisir en apprenant à utiliser Free JS,
              et j'ai donc réalisé quelques animations, et jeux simples.
            </li>
          </ul>
          <br />
          <p><strong>Environnement technique :</strong></p>
          <p>React Native, Visual Studio, GitHub.</p>
          <div className="captures-images">
            <img src={free1} alt="Capture écran pub1" />
            <img src={free2} alt="Capture écran pub2" />
            <img src={free3} alt="Capture écran pub3" />
          </div>
        </div>

        <div className="capturesline right" data-aos="fade-right">
          <h4>Doomify</h4>
          <p><strong>Quelques réalisations en Free JS:</strong></p>
          <ul>
            <li>
              Projet réalisé notamment pour approfondir mes connaissances en IA,
              Il permet de transformer une situation banale en une situation horrible, tout en générant une image, et un audio,
            </li>
          </ul>
          <br />
          <p><strong>Environnement technique :</strong></p>
          <p>Free JS</p>
          <div className="captures-images">
            <img src={dom1} alt="Capture écran dom1" />
            <img src={dom2} alt="Capture écran dom2" />
            <img src={dom3} alt="Capture écran dom3" />
          </div>
        </div>
      </div>
    </Container>
  );
}
