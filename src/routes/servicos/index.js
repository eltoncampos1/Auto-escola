import React from "react";

import ProductDetailPage from "../../components/pages/productDetail/ProductDetail";
import { useScrollToTop } from "../../hooks/scroll";

const ProductDetail = () => {
  useScrollToTop();

  return <ProductDetailPage />;
};

export default ProductDetail;
