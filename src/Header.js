import React from "react";
import PropTypes from "prop-types";

const Header = props => (
  <header>
    <h2>{props.children}</h2>
  </header>
);

Header.defaultProps = {
  children: "Rocketseat"
};

export default Header;
