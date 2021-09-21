import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ children }) => (
  <span aria-hidden>{children}</span>
);

Icon.propTypes = {
  children: PropTypes.node.isRequired
};

export default Icon;
