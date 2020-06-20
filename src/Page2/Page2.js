import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Page2 extends Component {
  render() {

    console.log('historia', this.props.history);
    console.log('locación', this.props.location);
    console.log('match', this.props.match);
    
    return (
      <div className="page">
        <h1>Location</h1>
        <p>Aquí se ve la pagina2</p>
      </div>
    );
  }
}

export default withRouter(Page2);
