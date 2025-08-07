import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p> Êtes vous sur le point de démarrer un nouveau projet ?</p>
        <p>N'hésitez pas à me contacter, je suis disponible pour vous aider !</p>
        <p>En Freelance comme en CDI</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:maelhounche@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:maelhounche@gmail.com">maelhounche@gmail.com</a>
        </div>
        <div>
        <a href="tel:+33745258212"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+33745258212">(+33) 7 45 25 82 12</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}