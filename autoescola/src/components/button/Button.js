import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonCollors = {
  default: "default",
  primary: "primary",
  danger: "danger",
};

const ButtonsVariants = {
  default: "default",
  outlined: "outlined",
  link: "link",
};

const getMainColor = ({ theme, color }) => {
  switch (color) {
    case ButtonCollors.primary:
      return theme.colors.primary.main;
    case ButtonCollors.danger:
      return theme.colors.danger.main;
    default:
      return "#e0e0e0";
  }
};

const getDarkColor = ({ theme, color }) => {
  switch (color) {
    case ButtonCollors.primary:
      return theme.colors.primary.dark;
    case ButtonCollors.danger:
      return theme.colors.danger.dark;
    default:
      return "#5a6268";
  }
};

const getColorText = (props) => props.theme.colors.primary.text;

const getOutlinedText = (props) => {
  if (props.color === ButtonCollors.default) {
    return "#212121";
  }

  return getMainColor(props);
};

const getLinkText = (props) => {
  if (props.color === ButtonCollors.default) {
    return "#757575";
  }

  return getMainColor(props);
};

const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 16px 36px;
  cursor: pointer;
  background-color: ${getMainColor};
  border: 2px solid ${getMainColor};
  color: ${getColorText};

  &:hover:enabled {
    background-color: ${getDarkColor};
    border-color: ${getDarkColor};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ButtonOutlined = styled(Button)`
  background-color: transparent;
  color: ${getOutlinedText};

  &:hover:enabled {
    background-color: transparent;
    color: ${getDarkColor};
  }
`;

const ButtonLink = styled(Button)`
  background-color: transparent;
  border-color: transparent;
  color: ${getLinkText};
  padding-left: 0;
  padding-right: 0;

  &:hover:enabled {
    background-color: transparent;
    border-color: transparent;
    color: ${getDarkColor};
  }
`;

const ButtonWrapper = (props) => {
  switch (props.variant) {
    case ButtonsVariants.outlined:
      return <ButtonOutlined {...props} />;
    case ButtonsVariants.link:
      return <ButtonLink {...props} />;
    default:
      return <Button {...props} />;
  }
};

ButtonWrapper.defaultProps = {
  type: "button",
  children: undefined,
  color: "default",
  variant: "default",
};

ButtonWrapper.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(ButtonCollors)),
  variant: PropTypes.oneOf(Object.values(ButtonsVariants)),
};

export default ButtonWrapper;
