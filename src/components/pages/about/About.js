import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Hero from "../../hero/Hero";
import Heading from "../../heading/Heading";
import Section from "../../section/Section";
import Grid from "../../grid/Grid";
import Footer from "../../footer/Footer";

import HeroImg from "../../../assets/car-bg.jpg";
import AboutImg from "../../../draws/About";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const About = () => (
  <>
    <Hero image={HeroImg}>
      <Heading>
        <h1>Auto Escola XXX</h1>
      </Heading>
    </Hero>
    <Section>
      <Grid md={2}>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            totam commodi facere vel fugiat assumenda cumque veritatis id nobis
            natus soluta quos quo, blanditiis sapiente nesciunt omnis ab
            exercitationem ut!
          </p>

          <p>
            Quisquam, natus illo rerum qui recusandae quod? Asperiores maxime
            consequuntur, quam quia aspernatur earum mollitia perferendis,
            temporibus facere error, quo accusamus fugiat quos nulla commodi
            quas repellat! Excepturi, nihil voluptates.
          </p>

          <p>
            Ratione enim libero distinctio ex recusandae nesciunt nisi quaerat
            dolor! Non labore pariatur veritatis maxime? Sapiente aut atque nisi
            harum velit? Commodi quam atque consectetur perspiciatis maiores
            cupiditate, iusto id.
          </p>

          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            ipsum eum corrupti quae aliquid sunt placeat officiis cupiditate.
            Voluptatum expedita ullam totam tempora, veritatis nisi ipsam iure
            itaque debitis sint.
          </p>
          <center>
            <ImageContainer>
              <AboutImg />
            </ImageContainer>
          </center>
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Grid md={2}>
        <div>
          <h4>Missão</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
            molestiae unde incidunt officiis possimus earum asperiores voluptate
            rem magni eum, officia obcaecati eius amet. Dolores, numquam!
            Impedit aperiam quisquam laboriosam!
          </p>
        </div>
        <div>
          <h4>Visão</h4>
          <p>
            Nam perspiciatis recusandae, quis, obcaecati corporis aperiam minus
            illum enim dicta iure veritatis quaerat ducimus placeat ullam. Sint
            atque, tempore consequatur odit, minus odio ipsa eos repellendus
            laborum eveniet itaque.
          </p>
        </div>
      </Grid>
    </Section>

    <Section>
      <Heading>
        <h2>Conheça nosso professores</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

About.defaultProps = {};

About.propTypes = {};

export default About;
