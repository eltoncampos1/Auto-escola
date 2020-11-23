import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Grid from "../grid/Grid";
import Heading from "../heading/Heading";
import Button from "../button/Button";
import Card, { CardMedia, CardBody } from "../card/Card";

const ToolBar = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const ProductGrid = ({ products }) => {
  const [showAll, setShowAll] = useState(false);
  const filteredProducts = showAll ? products : products.slice(0, 3);

  return (
    <>
      <Grid md={3}>
        {filteredProducts.map((product) => (
          <Card key={products.id}>
            <CardMedia image={product.image} />
            <CardBody>
              <Heading>
                <h6>{product.title}</h6>
              </Heading>
              <p>{product.summary}</p>
              <div>
                <Button color="primary" variant="link">
                  Saiba Mais
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </Grid>
      {!showAll && (
        <ToolBar>
          <Button
            variant="outlined"
            onClick={() => {
              setShowAll(true);
            }}
          >
            Lista completa de serviços
          </Button>
        </ToolBar>
      )}
    </>
  );
};

ProductGrid.defaultProps = {
  products: [],
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      image: PropTypes.string,
      title: PropTypes.string,
      summary: PropTypes.string,
    })
  ),
};

export default ProductGrid;
