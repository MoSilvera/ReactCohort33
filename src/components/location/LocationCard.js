import React, { Component } from 'react';

class LocationCard extends Component {
  render() {

    return (
      <div className="card">
        <div className="card-content">
          <h3>Kennel Name: <span style={{color: 'darkslategrey'}}>{this.props.location.name}</span></h3>
          <p>Address: {this.props.location.address}</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;