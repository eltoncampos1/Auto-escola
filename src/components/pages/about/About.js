import React from "react";

import styled from "styled-components";

import Hero from "../../hero/Hero";
import Heading from "../../heading/Heading";
import Section from "../../section/Section";
import Grid from "../../grid/Grid";
import Footer from "../../footer/Footer";
import Card, { CardMedia, CardMediaDescription } from "../../card/Card";
import BreadCrumb from "../../breadCrumb/BreadCrumb";

import HeroImg from "../../../assets/car-bg.jpg";
import AboutImg from "../../../draws/About";

import instImg1 from "../../../assets/instructors/inst1.png";
import instImg2 from "../../../assets/instructors/inst2.png";
import instImg3 from "../../../assets/instructors/inst3.png";
import instImg4 from "../../../assets/instructors/inst4.png";
import instImg5 from "../../../assets/instructors/inst5.png";
import instImg6 from "../../../assets/instructors/inst6.png";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const instructors = [
  { id: 1, name: "Intrutor(a) 1", avatar: instImg1 },
  { id: 2, name: "Intrutor(a) 2", avatar: instImg2 },
  { id: 3, name: "Intrutor(a) 3", avatar: instImg3 },
  { id: 4, name: "Intrutor(a) 4", avatar: instImg4 },
  { id: 5, name: "Intrutor(a) 5", avatar: instImg5 },
  { id: 6, name: "Intrutor(a) 6", avatar: instImg6 },
];

const About = () => (
  <>
    <Hero image={HeroImg}>
      <Heading>
        <h1>Auto Escola XXX</h1>
      </Heading>
      <BreadCrumb
        items={[{ label: "Início", link: "/" }, { label: "Sobre" }]}
      />
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
          <br />

          <p>
            Quisquam, natus illo rerum qui recusandae quod? Asperiores maxime
            consequuntur, quam quia aspernatur earum mollitia perferendis,
            temporibus facere error, quo accusamus fugiat quos nulla commodi
            quas repellat! Excepturi, nihil voluptates.
          </p>

          <br />

          <p>
            Ratione enim libero distinctio ex recusandae nesciunt nisi quaerat
            dolor! Non labore pariatur veritatis maxime? Sapiente aut atque nisi
            harum velit? Commodi quam atque consectetur perspiciatis maiores
            cupiditate, iusto id.
          </p>

          <br />

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

      <Grid sm={2} md={3} lg={4}>
        {instructors.map((instructor) => (
          <Card key={instructor.id}>
            <CardMedia image={instructor.avatar}>
              <CardMediaDescription>
                <h5>{instructor.name}</h5>
              </CardMediaDescription>
            </CardMedia>
          </Card>
        ))}
      </Grid>
    </Section>
    <Footer />
  </>
);

export default About;
