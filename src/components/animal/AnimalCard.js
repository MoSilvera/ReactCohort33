import React, { Component } from 'react';

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./DogIcon.svg')} alt="My Dog" />
          </picture>
          <h3>Name: <span style={{color: 'darkslategrey'}}>Doodles</span></h3>
          <p>Breed: Poodle</p>
        </div>
      </div>
    );
  }
}

export default AnimalCard;