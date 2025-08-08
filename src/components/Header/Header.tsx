import { Container } from './styles';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import Resume from '../../assets/Ingenieur_Cyril_Mael.pdf';

export function Header() {
  const [isActive, setActive] = useState(false);

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0];
    html.classList.toggle('light');
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      <HashLink smooth to="#home" className="logo">
        <span>{"<Bienvenu sur "}</span>
        <span>{" mon Portfolio/>"}</span>
      </HashLink>
      <input
        onChange={toggleTheme}
        className="container_toggle"
        type="checkbox"
        id="switch"
        name="mode"
      />
      <label htmlFor="switch">Toggle</label>
      <nav className={isActive ? 'active' : ''}>
        <NavHashLink smooth to="#home" onClick={closeMenu}>Accueil</NavHashLink>
        <NavHashLink smooth to="#about" onClick={closeMenu}>A propos de moi</NavHashLink>
        <NavHashLink smooth to="#project" onClick={closeMenu}>Expériences & Projets</NavHashLink>
        <NavHashLink smooth to="#contact" onClick={closeMenu}>Contact</NavHashLink>
        <a href={Resume} download className="button">Résumé</a>
      </nav>
      <div
        aria-expanded={isActive ? 'true' : 'false'}
        aria-haspopup="true"
        aria-label={isActive ? 'Fermer menu' : 'Ouvrir menu'}
        className={isActive ? 'menu active' : 'menu'}
        onClick={() => setActive(!isActive)}
      ></div>
    </Container>
  );
}
