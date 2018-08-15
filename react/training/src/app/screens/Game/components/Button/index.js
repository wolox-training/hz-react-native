import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button className={props.className} onClick={() => props.onClick(props.clickParam)}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  clickParam: PropTypes.number,
  onClick: PropTypes.func
};

export default Button;
