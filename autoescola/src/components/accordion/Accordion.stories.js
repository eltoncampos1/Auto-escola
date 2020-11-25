import React from "react";

import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

export default {
  title: "Components/Accordion",
  component: Accordion,
};

export const usage = () => (
  <>
    <Accordion title="Como eu renovo minha CNH">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum totam
      nulla ex dolorum suscipit optio doloribus? Et animi
    </Accordion>
    <Accordion title="Como eu faço a mudança de categoria">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum totam
      nulla ex dolorum suscipit optio doloribus? Et animi
    </Accordion>
    <Accordion title="Foi multado, e agora?">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum totam
      nulla ex dolorum suscipit optio doloribus? Et animi
    </Accordion>
  </>
);

export const withGroup = () => (
  <AccordionGroup>
    <Accordion title="Como eu renovo minha CNH">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum totam
      nulla ex dolorum suscipit optio doloribus? Et animi
    </Accordion>
    <Accordion title="Como eu faço a mudança de categoria">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum totam
      nulla ex dolorum suscipit optio doloribus? Et animi
    </Accordion>
    <Accordion title="Foi multado, e agora?">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum totam
      nulla ex dolorum suscipit optio doloribus? Et animi
    </Accordion>
  </AccordionGroup>
);
