import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
//import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      
      <div>
        <p>
          ce site a été fait avec : <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <div className="social-media"><a
        href="https://www.linkedin.com/in/ma%C3%ABl-cyril-ingenieur/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://github.com/hounche"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=33745258212"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="WhatsApp" />
        </a>
        <a
          href="https://t.me/maelhounche"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="Telegram" />
        </a></div>
        
      </div>
      <div className="footer-text">
        <p>©2025 Cyril Maël Hounché. All rights reserved.</p>
      </div>
    </Container>
  )
}
