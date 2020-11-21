import React from "react";
import { render } from "../../test-utils";

import Feature from "./Feature";

test("renders the title", () => {
  const { getByText } = render(<Feature title="my title" />);

  expect(getByText("my title")).toBeInTheDocument();
});

test("renders the children", () => {
  const { getByText } = render(<Feature>my children</Feature>);

  expect(getByText("my children")).toBeInTheDocument();
});
