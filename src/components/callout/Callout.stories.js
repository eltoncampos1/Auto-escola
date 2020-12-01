import React from "react";

import Callout, { CalloutBody, CalloutActions, CalloutMedia } from "./Callout";
import Button from "../button/Button";

import SpeedImage from "../../draws/Speed";

export default {
  title: "Components/Callout",
  component: Callout,
  subcomponents: { CalloutBody, CalloutActions, CalloutMedia },
};

export const usage = () => (
  <Callout>
    <CalloutBody>
      <h6>Faça sua matrícula agora mesmo</h6>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
        reiciendis aut nihil ut dignissimos mollitia dolorem, tempora molestiae
        quo est voluptatibus qui eveniet nemo, fuga quod nesciunt. Fugiat, quam
        illo.
      </p>
      <CalloutActions>
        <Button color="primary">Matricular</Button>
      </CalloutActions>
    </CalloutBody>
    <CalloutMedia>
      <SpeedImage />
    </CalloutMedia>
  </Callout>
);
