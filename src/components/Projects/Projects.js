import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import inventory from "../../Assets/Projects/inventory.png";
import weather from "../../Assets/Projects/weather.png";
import pricetag from "../../Assets/Projects/pricetag.png";
import redux from "../../Assets/Projects/redux.png";
import music from "../../Assets/Projects/music.png";
import podcast from "../../Assets/Projects/podcast.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inventory}
              isBlog={false}
              title="inventory Management Tool"
              description="An **Inventory Management Tool** I developed to help businesses track and manage their stock in real-time. It features barcode scanning, low-stock alerts, automated replenishment, and detailed reporting, enabling efficient inventory control. The tool integrates with other systems (e.g., ERP, e-commerce platforms) and supports multi-location management, optimizing stock levels and improving decision-making.Built with [React/JavaScript/HTML/CSS/Nodejs/Mongodb] and optimized for both mobile and desktop devices."
              ghLink="https://github.com/kalaikratos/capstoneProject.git"
              demoLink="https://capstone-project-psi-jade.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce} 
              isBlog={false}
              title="Ecommerce"
              description= "A full-featured e-commerce platform includes user authentication, product management, shopping cart functionality, and order processing. The platform supports secure payment integration, user reviews, and product search capabilities. Built with [Node.js/React/MongoDB/JavaScript/HTML/CSS], it demonstrates skills in full-stack development, RESTful API design, and responsive UI/UX design."
              ghLink="https://github.com/kalaikratos/mern-ecommerce-main.git"
              demoLink="https://mern-ecommerce-main-wheat.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="A responsive weather app that provides real-time weather data, including current conditions and a 7-day forecast, using [OpenWeatherMap/WeatherAPI]. Features include location-based updates, search functionality, and a clean, user-friendly interface. Built with [JavaScript/HTML/CSS] and optimized for both mobile and desktop devices. Demonstrates skills in API integration and responsive design."
              ghLink="https://github.com/kalaikratos/FSD/tree/01ee5d8299da9e5b484a059888736956661b18ef/ROADMAP/WeatherAp"
              demoLink="https://fsd-mfi3.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pricetag}
              isBlog={false}
              title="price tag"
              description=" A price tag component designed using Bootstrap, HTML, and CSS. It displays product information, including the name, price, and a brief description. The component is styled to be visually appealing and responsive, ensuring it looks great on both mobile and desktop devices. Built with [Bootstrap/HTML/CSS], it demonstrates skills in front-end design and responsive layout."
              ghLink="https://github.com/kalaikratos/FSD/tree/01ee5d8299da9e5b484a059888736956661b18ef/ROADMAP/pricecard"
              demoLink="https://pricecard-hazel.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Music Player"
              description="A music player app that allows users to play, pause, skip, and repeat songs, as well as adjust volume and seek within tracks. Features include a dynamic progress bar, song duration display, and album cover art. Built with [avaScript/HTML/CSS] and optimized for both mobile and desktop devices. Demonstrates skills in state management, event handling, and UI design."
              ghLink="https://github.com/kalaikratos/FSD/tree/01ee5d8299da9e5b484a059888736956661b18ef/ROADMAP/Musicapp"
              demoLink="https://musicplayer-k629hfd7m-kalaiyarasan-dasss-projects.vercel.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={podcast}
              isBlog={false}
              title="Podcast"
              description="A podcast web app that allows users to browse, stream, and download their favorite podcasts. Features include a searchable directory, episode playlists, and user subscriptions. The app provides detailed information about each podcast, including episode descriptions and release dates. Built with [React/Nodejs/Mongodb/JavaScript/HTML/CSS], it demonstrates skills in API integration, state management, and responsive design."
              ghLink="https://github.com/kalaikratos/Podstream-main.git"
              demoLink="https://podstream-main.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={redux}
              isBlog={false}
              title="Ecommerce"
              description=" An e-commerce site built with React and Redux for state management. It features product listings, a shopping cart. Users can browse products, add items to their cart. The site uses Redux to manage the state of the cart and user sessions, ensuring a seamless and responsive user experience. Built with [React/Redux/JavaScript/HTML/CSS] and optimized for both mobile and desktop devices. Demonstrates skills in state management, asynchronous actions, and UI design.."
             
              ghLink="https://github.com/kalaikratos/FSD/tree/01ee5d8299da9e5b484a059888736956661b18ef/ROADMAP/redux"
              demoLink="https://redux-olive.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
