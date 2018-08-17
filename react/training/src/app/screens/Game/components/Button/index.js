import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  handleClick = () => {
    this.props.onClick(this.props.clickParam);
  };

  render() {
    return (
      <button className={this.props.className} onClick={this.handleClick}>
        {this.props.content}
      </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  clickParam: PropTypes.number,
  content: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
