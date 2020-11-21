import PropTypes from "prop-types";
import styled from "styled-components";

import { BreakPointSizes, breakAt } from "../../styles/BreakPoints";

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakPointSizes.sm)} {
    padding: 0 16px;
  }

  ${breakAt(BreakPointSizes.lg)} {
    width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
`;

Container.defaultProps = {
  children: undefined,
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
