import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    console.log(this.props)

    return(
      <div>
        <li key={this.props.id}>{this.props.name}
        <button onClick={this.handleClick}>Delete</button>
        </li>
      </div>
    );
  }
};

export default Band;
