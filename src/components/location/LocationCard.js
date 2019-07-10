import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Kennel Name: <span style={{color: 'darkslategrey'}}>Fluffy Acres</span></h3>
          <p>Address: 214 rainbow bridge road</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;