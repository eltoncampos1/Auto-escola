import React from "react";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";

import Grid from "../grid/Grid";

import Feature from "./Feature";

export default {
  title: "Components/Feature",
  component: Feature,
};

export const usage = () => (
  <Feature icon={<FaCar />} title="titulo">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
  </Feature>
);

export const withgrid = () => (
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
);
