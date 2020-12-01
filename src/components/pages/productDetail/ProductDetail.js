import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";

import Hero from "../../hero/Hero";
import Heading from "../../heading/Heading";
import Section from "../../section/Section";
import Footer from "../../footer/Footer";
import Button from "../../button/Button";
import Callout, {
  CalloutMedia,
  CalloutActions,
  CalloutBody,
} from "../../callout/Callout";

import HeroImg from "../../../assets/car-bg.jpg";
import SpeedImage from "../../../draws/Speed";

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const ProductDetail = () => (
  <>
    <Hero image={HeroImg}>
      <Heading>
        <h1>Nome do serviço</h1>
      </Heading>
    </Hero>

    <Section>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad nisi itaque
        incidunt repellat officia eum sed adipisci rem nobis porro quia quo
        veniam architecto, ipsam ea. Sit repudiandae aliquid quas!
      </p>
      <br />
      <p>
        Numquam quaerat reprehenderit accusamus atque labore ex aperiam.
        Quisquam ipsum libero molestias vero, quibusdam, dolorem ducimus
        similique doloremque recusandae voluptatibus, aut velit cumque
        voluptates perspiciatis reprehenderit totam accusamus voluptas.
        Repellendus?
      </p>
      <br />
      <p>
        Aliquam dolor modi rem iure cumque at voluptas totam repellat ipsum
        temporibus fuga deleniti, voluptates ducimus nisi illum, molestiae quas
        pariatur! Ipsa unde vitae, aliquid quidem enim expedita nemo aliquam.
      </p>
      <br />
      <h5>Documentos necessários:</h5>
      <br />
      <PinnedList>
        <PinnedItem>
          <FaIdCard />
          RG
        </PinnedItem>
        <PinnedItem>
          <FaIdCard />
          CPF
        </PinnedItem>
        <PinnedItem>
          <FaScroll />
          Certidão de nascimento ou casamento
        </PinnedItem>
        <PinnedItem>
          <FaHome />
          Comprovante de residência
        </PinnedItem>
      </PinnedList>
    </Section>
    <Section inverse>
      <Callout>
        <CalloutBody>
          <h6>Faça sua matrícula agora mesmo</h6>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
            reiciendis aut nihil ut dignissimos mollitia dolorem, tempora
            molestiae quo est voluptatibus qui eveniet nemo, fuga quod nesciunt.
            Fugiat, quam illo.
          </p>
          <CalloutActions>
            <Button color="primary">Matricular</Button>
          </CalloutActions>
        </CalloutBody>
        <CalloutMedia>
          <SpeedImage />
        </CalloutMedia>
      </Callout>
    </Section>
    <Footer />
  </>
);

ProductDetail.defaultProps = {};

ProductDetail.propTypes = {};

export default ProductDetail;
