import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

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
          <ul>
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
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
