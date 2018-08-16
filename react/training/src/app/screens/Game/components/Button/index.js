import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const handleClick = () => {
    props.onClick(props.clickParam);
  };

  return (
    <button className={props.className} onClick={handleClick}>
      {props.content}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  clickParam: PropTypes.number,
  content: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
