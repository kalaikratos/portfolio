import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import pdf from "../../Assets/certificate.pdf";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kalaiyarasan Dass</span>
            from <span className="purple"> Ranipet,India</span>
            <br />
            Aspiring MERN Stack Developer I am an enthusiastic IT professional seeking an entry-level software engineering role. With strong organizational skills and a passion for technology, I aim to contribute to an innovative team while continuing to grow and develop my technical expertise.
            <br />
           I have completed my B.Tech in Information Technology from C.Abdul Hakeem College of Engineering and Technology,Ranipet,India.
           Also I have completed my Masters in Embedded systems from Institut supérieur d'électronique de Paris,Paris,France.

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kalaiyarasan Dass</footer>
            <br />
            <br />
            <p style={{ textAlign: "justify" }}>
            Here are some of my certifications:
            </p>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            
            <li className="about-certification">
              <ImPointRight /> 
              <a href="https://www.guvi.in/share-certificate/77o41E5Z4jAHX13R96" target="_blank" rel="noopener noreferrer">
              Certified MERN Stack Developer
              </a>
            </li>
            <li className="about-certification">
              <ImPointRight /> 
              <a href="https://www.guvi.in/share-certificate/5V16G129ht107Rj7p2" target="_blank" rel="noopener noreferrer">
              AWS fundamentals
              </a>
            </li>
            <li className="about-certification">
              <ImPointRight /> 
              <a href="https://www.guvi.in/share-certificate/6x3p16AN73C36d73k0" target="_blank" rel="noopener noreferrer">
              Darkweb
              </a>
            </li>
            <li className="about-certification">
              <ImPointRight /> 
              <a href="https://www.guvi.in/share-certificate/4V4E735769g81q4wS1" target="_blank" rel="noopener noreferrer">
             Bootstrap
              </a>
            </li>
            <li className="about-certification">
              <ImPointRight /> 
              <a href="https://www.guvi.in/share-certificate/eH103r656K10U9A83j" target="_blank" rel="noopener noreferrer">
              Python
              </a>
            </li>
            <li className="about-certification">
              <ImPointRight /> 
              <a href={pdf} target="_blank" rel="noopener noreferrer">
             Data Science 
              </a>
            </li>
            </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
