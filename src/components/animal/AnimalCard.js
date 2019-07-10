import React, { Component } from 'react';

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
          <div className="card-content">
            <picture>
              <img src={require('./DogIcon.svg')} alt="My Dog" />
            </picture>
            <h2>Name: <span style={{color: 'darkslategrey'}}>{this.props.animal.name}</span></h2>
            <p>Breed: {this.props.animal.breed}</p>
          </div>
      </div>
    );
  }
}

export default AnimalCard;