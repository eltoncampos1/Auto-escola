import React from "react";

import ProductGrid from "./ProductGrid";
import PlaceholderImg from "../../stories/assets/card-placeholder.jpg";

export default {
  title: "Components/ProductGrid",
  component: ProductGrid,
};

export const usage = () => (
  <ProductGrid
    products={[
      { id: 1, image: PlaceholderImg, title: "Título 1", summary: "Texto" },
      { id: 2, image: PlaceholderImg, title: "Título 2", summary: "Texto" },
      { id: 3, image: PlaceholderImg, title: "Título 3", summary: "Texto" },
      { id: 4, image: PlaceholderImg, title: "Título 4", summary: "Texto" },
      { id: 5, image: PlaceholderImg, title: "Título 5", summary: "Texto" },
      { id: 6, image: PlaceholderImg, title: "Título 6", summary: "Texto" },
    ]}
  />
);
