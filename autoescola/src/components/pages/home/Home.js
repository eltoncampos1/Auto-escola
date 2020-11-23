import React from "react";
// import PropTypes from "prop-types";

import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";

import Hero from "../../hero/Hero";
import Heading from "../../heading/Heading";
import Button from "../../button/Button";
import Feature from "../../feature/Feature";
import Grid from "../../grid/Grid";
import Section from "../../section/Section";
import Footer from "../../footer/Footer";

import HeroImg from "../../../assets/car-bg.jpg";
import AboutVid from "../../../assets/about.mp4";

const Home = () => (
  <>
    <Hero image={HeroImg}>
      <Heading>
        <h1>
          Ganhe sua <strong>liberdade</strong>
          <br /> para ir e vir
        </h1>
      </Heading>

      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      </ul>

      <Button color="primary" variant="outlined">
        Matricule-se agora
      </Button>
    </Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="maior e melhor fronta">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaKey />} title="habilitação mais rapida">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Excelente localização">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
      </Grid>
    </Section>

    <Section inverse>
      <Heading>
        <h2>Conheça nosso serviços</h2>
      </Heading>
    </Section>

    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Autoscola XXXX</h2>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Cupiditate, atque unde. Repellendus dolorum fugit tenetur? Sapiente
            reiciendis placeat labore consectetur? Explicabo et iusto minima
            deserunt eligendi, hic earum illo excepturi.
          </p>
          <div>
            <Button color="primary">Saiba mais</Button>
          </div>
        </div>
        <div>
          <video src={AboutVid} width="100%" autoPlay loop />
        </div>
      </Grid>
    </Section>

    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
