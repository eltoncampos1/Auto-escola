import React from "react";

import BreadCrumb from "./BreadCrumb";

export default {
  title: "Components/BreadCrumb",
  component: BreadCrumb,
};

const items = [{ label: "Início", link: "/" }, { label: "Sobre" }];

export const usage = () => <BreadCrumb items={items} />;
