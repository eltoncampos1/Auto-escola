import React from "react";
import { text } from "@storybook/addon-knobs";

import Hero from "./Hero";
import roadImg from "../../stories/assets/road-bg.jpg";
import carImg from "../../stories/assets/car-bg.jpg";
import Heading from "../heading/Heading";

export default {
  title: "Components / Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={roadImg}>
    <h1>{text("Title", "Ganhe sua liberdade para ir e vir")}</h1>
    <p>{text("Text", "A auto escola lider em aprovação.")}</p>
  </Hero>
);

export const withList = () => (
  <Hero image={carImg}>
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
  </Hero>
);
