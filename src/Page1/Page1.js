import React, { Component } from 'react';

class Page1 extends Component {
  render() {
    return (
      <div className="page">
        <p> Aqui llega {this.props.name} desde la página 1</p>
      </div>
    );
  }
}

export default Page1;
