import React, { Component, PropTypes } from 'react';

export default class AccountRow extends Component {
  render() {
    return (
      <tr><td>{this.props.text}</td></tr>
    );
  }
}

AccountRow.propTypes = {  
  text: PropTypes.string.isRequired
};
