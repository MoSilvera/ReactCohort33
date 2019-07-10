import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Owner: <span style={{color: 'darkslategrey'}}>Doodle's dad</span></h3>
          <p>Contact info: None, send a carrier pigeon</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;